// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v135 = stdlib.protect(ctc0, interact.productId, 'for Alice\'s interact field productId');
  const v136 = stdlib.protect(ctc1, interact.productName, 'for Alice\'s interact field productName');
  const v137 = stdlib.protect(ctc0, interact.productPrice, 'for Alice\'s interact field productPrice');
  
  const txn1 = await (ctc.sendrecv({
    args: [v136, v135, v137],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v141, v142, v143], secs: v145, time: v144, didSend: v31, from: v140 } = txn1;
      
      ;
      const v152 = stdlib.safeAdd(v144, stdlib.checkedBigNumberify('./index.rsh:8:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v141, v142, v143], secs: v145, time: v144, didSend: v31, from: v140 } = txn1;
  ;
  const v152 = stdlib.safeAdd(v144, stdlib.checkedBigNumberify('./index.rsh:8:18:decimal', stdlib.UInt_max, '30'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: ['time', v152],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v140, v143, v152],
      evt_cnt: 0,
      funcNum: 2,
      lct: v144,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v206, time: v205, didSend: v110, from: v204 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v206, time: v205, didSend: v110, from: v204 } = txn3;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:32:29:application',
      fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:51:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v157], secs: v159, time: v158, didSend: v39, from: v156 } = txn2;
    ;
    const v166 = stdlib.safeAdd(v158, stdlib.checkedBigNumberify('./index.rsh:8:18:decimal', stdlib.UInt_max, '30'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ['time', v166],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v140, v143, v156, v166],
        evt_cnt: 0,
        funcNum: 4,
        lct: v158,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v188, time: v187, didSend: v79, from: v186 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v188, time: v187, didSend: v79, from: v186 } = txn4;
      ;
      const v189 = stdlib.addressEq(v140, v186);
      const v190 = stdlib.addressEq(v156, v186);
      const v191 = v189 ? true : v190;
      stdlib.assert(v191, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:58:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:32:29:application',
        fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:58:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v172, time: v171, didSend: v49, from: v170 } = txn3;
      ;
      const v175 = stdlib.addressEq(v156, v170);
      stdlib.assert(v175, {
        at: './index.rsh:57:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.seeResult(v143, v142, v141), {
        at: './index.rsh:63:23:application',
        fs: ['at ./index.rsh:62:7:application call to [unknown function] (defined at: ./index.rsh:62:18:function exp)'],
        msg: 'seeResult',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v141, v142, v143], secs: v145, time: v144, didSend: v31, from: v140 } = txn1;
  ;
  const v152 = stdlib.safeAdd(v144, stdlib.checkedBigNumberify('./index.rsh:8:18:decimal', stdlib.UInt_max, '30'));
  stdlib.protect(ctc2, await interact.receiveTheProduct(v142, v141, v143), {
    at: './index.rsh:48:68:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'receiveTheProduct',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v140, v143, v152, null],
    evt_cnt: 1,
    funcNum: 1,
    lct: v144,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:6:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v157], secs: v159, time: v158, didSend: v39, from: v156 } = txn2;
      
      ;
      const v166 = stdlib.safeAdd(v158, stdlib.checkedBigNumberify('./index.rsh:8:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v152],
    tys: [ctc3, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v140, v143, v152],
      evt_cnt: 0,
      funcNum: 2,
      lct: v144,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v206, time: v205, didSend: v110, from: v204 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v206, time: v205, didSend: v110, from: v204 } = txn3;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:32:29:application',
      fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:51:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v157], secs: v159, time: v158, didSend: v39, from: v156 } = txn2;
    ;
    const v166 = stdlib.safeAdd(v158, stdlib.checkedBigNumberify('./index.rsh:8:18:decimal', stdlib.UInt_max, '30'));
    stdlib.protect(ctc2, await interact.DoPayment(v143), {
      at: './index.rsh:55:23:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
      msg: 'DoPayment',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v140, v143, v156, v166],
      evt_cnt: 0,
      funcNum: 3,
      lct: v158,
      onlyIf: true,
      out_tys: [],
      pay: [v143, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v172, time: v171, didSend: v49, from: v170 } = txn3;
        
        sim_r.txns.push({
          amt: v143,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v140,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v166],
      tys: [ctc3, ctc1, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v140, v143, v156, v166],
        evt_cnt: 0,
        funcNum: 4,
        lct: v158,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v188, time: v187, didSend: v79, from: v186 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc1, ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v188, time: v187, didSend: v79, from: v186 } = txn4;
      ;
      const v189 = stdlib.addressEq(v140, v186);
      const v190 = stdlib.addressEq(v156, v186);
      const v191 = v189 ? true : v190;
      stdlib.assert(v191, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:58:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:32:29:application',
        fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:58:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v172, time: v171, didSend: v49, from: v170 } = txn3;
      ;
      const v175 = stdlib.addressEq(v156, v170);
      stdlib.assert(v175, {
        at: './index.rsh:57:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.seeResult(v143, v142, v141), {
        at: './index.rsh:63:23:application',
        fs: ['at ./index.rsh:62:7:application call to [unknown function] (defined at: ./index.rsh:62:18:function exp)'],
        msg: 'seeResult',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAJAAEDAgRIICgeJgIBAAAiNQAxGEECBSlkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAMFJJAxAAJNJIQQMQAA9IQQSRCQ0ARJENARJIhJMNAISEUQoZDUDgASRJzTzsDIGNAMhBVsPRDQDVwAgMQASNANXKCAxABIRREIBPUgkNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEp2XEtLAyBjQDIQVbDEQ0/4gBejQDVyggMQASRLEisgE0/7III7IQNANXACCyB7NCAO5IIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEHWw9EQgDGSSMMQABfSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEGWzX+STUFNf2ABJKjUII0/VCwMgY0AyEHWwxEMgYhCAg1/DT/NP4WUDEAUDT8FlAoSwFXAFBnSCQ1ATIGNQJCAH1IgaCNBogAxiI0ARJENARJIhJMNAISEURJNQVJSVcAFDX/gRRbNf6BHFs1/YAEa8gzcDT/UDT+FlA0/RZQsDIGIQgINfwxADT9FlA0/BZQKEsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "v141",
                "type": "bytes20"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "v141",
                "type": "bytes20"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v157",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v157",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f5638038062000f56833981016040819052620000269162000299565b600080805543600355604080516020808201835292815281513381528451818501528484015180516001600160601b0319168285015293840151606082015292909101516080830152907fc55b39b57b6b30e7216d7a352d4f7334662962a96ca2ec7108b52ea236a5f32f9060a00160405180910390a1620000ab341560076200013a565b620000b843601e62000165565b815260408051606080820183526000602080840182815284860183815233808752898401518801518352885182526001948590554390945586519283019390935251948101949094525190830152906080016040516020818303038152906040526002908051906020019062000130929190620001bc565b50505050620003aa565b81620001615760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000174838262000346565b9150811015620001b65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000158565b92915050565b828054620001ca906200036d565b90600052602060002090601f016020900481019282620001ee576000855562000239565b82601f106200020957805160ff191683800117855562000239565b8280016001018555821562000239579182015b82811115620002395782518255916020019190600101906200021c565b50620002479291506200024b565b5090565b5b808211156200024757600081556001016200024c565b604051606081016001600160401b03811182821017156200029357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036080811215620002ad57600080fd5b604080519081016001600160401b0381118282101715620002de57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002f857600080fd5b6200030262000262565b60208501519092506001600160601b0319811681146200032157600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600082198211156200036857634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200038257607f821691505b60208210811415620003a457634e487b7160e01b600052602260045260246000fd5b50919050565b610b9c80620003ba6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c15780639a3e3912146100d6578063a7661d54146100e9578063ab53f2c6146100fc57005b80631e93b0f11461007757806373b4522c1461009b5780637eea518c146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a936600461093b565b61011f565b6100756100bc36600461093b565b6102bc565b3480156100cd57600080fd5b50600154610088565b6100756100e436600461093b565b6103f8565b6100756100f736600461093b565b6105dd565b34801561010857600080fd5b50610111610737565b60405161009292919061095e565b61012f60036000541460126107d4565b6101498135158061014257506001548235145b60136107d4565b60008080556002805461015b906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610187906109bb565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610a0c565b90506101ff8160600151431060146107d4565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610230929190610a9c565b60405180910390a16102498160200151341460106107d4565b6040810151610264906001600160a01b0316331460116107d4565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a1573d6000803e3d6000fd5b50600080805560018190556102b89060029061084d565b5050565b6102cc600160005414600d6107d4565b6102e6813515806102df57506001548235145b600e6107d4565b6000808055600280546102f8906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610324906109bb565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b50505050508060200190518101906103899190610ad1565b905061039d8160400151431015600f6107d4565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103ce929190610a9c565b60405180910390a16103e23415600c6107d4565b600080805560018190556102b89060029061084d565b61040860016000541460096107d4565b6104228135158061041b57506001548235145b600a6107d4565b600080805560028054610434906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610460906109bb565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c59190610ad1565b90506104dd6040518060200160405280600081525090565b6104ee82604001514310600b6107d4565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338460405161051f929190610a9c565b60405180910390a1610533341560086107d4565b61053e43601e6107fa565b815260408051608080820183526000808352602080840182815284860183815260608087018581528a516001600160a01b03908116808a528c87015186523385528b518352600390975543600155895195860196909652925197840197909752519092169481019490945251908301529060a001604051602081830303815290604052600290805190602001906105d692919061088a565b5050505050565b6105ed60036000541460176107d4565b6106078135158061060057506001548235145b60186107d4565b600080805560028054610619906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610645906109bb565b80156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b50505050508060200190518101906106aa9190610a0c565b90506106be816060015143101560196107d4565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516106ef929190610a9c565b60405180910390a1610703341560156107d4565b80516103e2906001600160a01b0316331461072d5760408201516001600160a01b03163314610730565b60015b60166107d4565b60006060600054600280805461074c906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610778906109bb565b80156107c55780601f1061079a576101008083540402835291602001916107c5565b820191906000526020600020905b8154815290600101906020018083116107a857829003601f168201915b50505050509050915091509091565b816102b85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826108078382610b40565b91508110156108475760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016107f1565b92915050565b508054610859906109bb565b6000825580601f10610869575050565b601f016020900490600052602060002090810190610887919061090e565b50565b828054610896906109bb565b90600052602060002090601f0160209004810192826108b857600085556108fe565b82601f106108d157805160ff19168380011785556108fe565b828001600101855582156108fe579182015b828111156108fe5782518255916020019190600101906108e3565b5061090a92915061090e565b5090565b5b8082111561090a576000815560010161090f565b60006040828403121561093557600080fd5b50919050565b60006040828403121561094d57600080fd5b6109578383610923565b9392505050565b82815260006020604081840152835180604085015260005b8181101561099257858101830151858201606001528201610976565b818111156109a4576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806109cf57607f821691505b6020821081141561093557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a0757600080fd5b919050565b600060808284031215610a1e57600080fd5b6040516080810181811067ffffffffffffffff82111715610a4f57634e487b7160e01b600052604160045260246000fd5b604052610a5b836109f0565b815260208301516020820152610a73604084016109f0565b6040820152606083015160608201528091505092915050565b80358015158114610a0757600080fd5b6001600160a01b038316815281356020808301919091526060820190610ac3908401610a8c565b151560408301529392505050565b600060608284031215610ae357600080fd5b6040516060810181811067ffffffffffffffff82111715610b1457634e487b7160e01b600052604160045260246000fd5b604052610b20836109f0565b815260208301516020820152604083015160408201528091505092915050565b60008219821115610b6157634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220c3469f1ed17c69a2b96ddabfd89331538cd9fa3bd58c8fa1ba03e000e767aba164736f6c634300080c0033`,
  BytecodeLen: 3926,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:51:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:58:50:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
