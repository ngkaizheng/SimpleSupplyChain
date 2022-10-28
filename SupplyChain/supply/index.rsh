'reach 0.1';


const [ isProductName, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isProductID, ZEROID, ONEID, TWOID, THREEID, FOURID, FIVEID ] = makeEnum(6);
const [ isProductPrice, ZEROPRICE, ONEPRICE, TWOPRICE, THREEPRICE, FOURPRICE, FIVEPRICE ] = makeEnum(6);

const DEADLINE = 30;

export const main = Reach.App(() => {
  
  const Visitor = {
    ...hasRandom,
    seeResult: Fun([UInt, UInt, Bytes(20)], Null),
    informTimeout: Fun([], Null),
  };

  const A = Participant('Alice', {
    ...Visitor,
    productId: UInt,
    productName: Bytes(20),
    productPrice: UInt,
  });
  const B = Participant('Bob', {
    ...Visitor,
    receiveTheProduct: Fun([UInt, Bytes(20), UInt], Null),
    DoPayment: Fun([UInt], Null),
  });

  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout(); 
      }
    );
  };

  init();
  
  A.only(() => {
    const productName = declassify(interact.productName)
    const productId = declassify(interact.productId)
    const productPrice = declassify(interact.productPrice)
  });
  A.publish(productName, productId, productPrice)
  commit();
  
  B.only(() => {
    const receiveTheProduct = declassify(interact.receiveTheProduct(productId, productName, productPrice));
   });
   B.publish(receiveTheProduct)
   .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
  commit();

  B.only(() => {
    interact.DoPayment(productPrice);
  });
  B.pay(productPrice)
   .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
  transfer(productPrice).to(A)
  commit();

  each([A,B], () => {
    interact.seeResult(productPrice, productId, productName);
  });

});
