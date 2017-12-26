import 'lib-flexible/flexible'
import '../css/index.scss';
import '../css/css.css';

// import {fetch} from "./common";
// // import  $ from 'jquery/dist/jquery.min'
// //
// // $('.productDetails').hover(function(){
// //     $(this).attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAcCAYAAACj6tvkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZDMwOWUxMi0xNzlkLTcxNDEtODk5YS0yNmUyOTk0MmVkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEYxRDcxQTFENEY1MTFFN0JFRkRGRTEwNzgyNDUyQzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEYxRDcxQTBENEY1MTFFN0JFRkRGRTEwNzgyNDUyQzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU4NDk4NjNlLWZkN2MtMGM0ZS1hMDJlLTIxNzM1MDY5MDcwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozZDMwOWUxMi0xNzlkLTcxNDEtODk5YS0yNmUyOTk0MmVkNjMiLz4gPC9y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')
// // },function(){
// //     $(this).attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAcCAYAAACj6tvkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZDMwOWUxMi0xNzlkLTcxNDEtODk5YS0yNmUyOTk0MmVkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0VBNkQwNTFENEY1MTFFN0I0MTFDNDg2MTQwQTE1ODMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0VBNkQwNTBENEY1MTFFN0I0MTFDNDg2MTQwQTE1ODMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU4NDk4NjNlLWZkN2MtMGM0ZS1hMDJlLTIxNzM1MDY5MDcwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozZDMwOWUxMi0xNzlkLTcxNDEtODk5YS0yNmUyOTk0MmVkNjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wZlNxAAAFf0lEQVR42uxbSWwbVRh+TgOnQhyJ5UCFzVokUsUS6qEstSMkkFhEEFJbFikt4gzhxHKJc4HecHtuRSqx00PLVlUscSiiB0CKRUCoFJgUuNBKDZQLRa35/vp70s/TG3scv9QTaX7py3gWz7z837++N859cs11poPkgLuA+4E7gBuBYeBSk0k/5SxwGjgOfAl8ABy5+7efm23JbEP4ALAdeIEkZ5J+EfJfBmZA/PluCJeDbwMbuX8CeBP4DPgeOAn8k+m3r7IWWAcUgDFgC3kT+QrYCtJ/SUJ4BXgXuIJEPw+8A5zLdJw+AakXtp+uu34NSd8JXAucAh7B+c/dsK3lHuAwyZacsIGenZGdfuLPAcLVCLkTDj+GIdwbR/h6YD+Lsd3AQ8BfAceUZ/TopxQ9Yyp5riu1GWsl5jtpIf4MudtNLveD9PVuSJdwcJQ5W3L3o0Az8FgOcCAP83MSqXY4H0mB4jkux+rOOfk8wTwX8dgk8ArwLFBT18p3y+xQXBG9zKXAeP8X0l0ByTlG563M6ZskCljCnwT2Ar8CtwJnAnhS0eMZU8Aiq39X6jHKbSc+xedJ6BCwQ5Euz3wV2KeeH/F6GetSDOH2czuZTmCcF5Vwkn4ZNgvM6U/h2r1CuPxTx9h6PQ68EWAcVZLbjcR5074YL55t42klEjXkRBRLsE0vs44BuITP8dnaeK3RzjjX19NGOEl/DJvX2bLdPIg/m0n2IsN5CKkrb3uGinMVIoprJAjv0TKUOU9Ca/yua4A6ckwQ1uC0p5f5P4w69y849wtJdonjnokx9G5FOH2JHG8Wwu/jibcCVuPW4ov0nqIT8mx4zycIhcVl5st59b2IRqeJXFS5XMuQ+tzgGKc7eHgUuLgthzIiydvwcuH2OeFaCL9dhcjQEtFap1gg1VSxZGJyuSvWA5NK05PjXW9pcr/q8S43NVVj6oSKY8CpKOJiZJaEbxLCb+LBhYAP2K7IzHM7ThhVBGmFT9Ir3WKok0H5CjnjKbSqniKy6olIhh5c4P2XYu6/msRyeyGHD3PnVOB+11W4r9ItO17TbVsW1yf7Kvwpz7PLThqScf9Jogs0wEmnZWv3zJBF7pQ61msbeJLb4cEVtqyxZeSiSkx6mea9Zruo8t2x6BCnq38bKWyxdMCTU305v+Tk/F5S35x63qjzvPlQhAjhssR2Nafifk9RGGqocOpGB62MpEqvJ6z+l7roFoqBCNc1hjX4mYC9/ZXcnhbCfyThIykjfFIpuOlRUNXpmbsh29YZlQ41RLsUsJpkhNtjQrhMqd7JkHc4YGuRBsnTOHxEFYikY/ZNANU8PXoaxaazo7J48iF3tpnWnHoIqazAhMRyZJQt3TRzfE7levdYp7FOMNRqrATZkapXehb04APkVuQj8XBZLz3OmRiZaO91arVIRTR6vE+tTT7V4di3cjXueGaIXHixPDwyYefltzGSCcdHBpkfZdF8j2m9HvMe8HePLYYxyVfE2nlnnLjhOC7C7FKTPCGIqKt8P07jbpiUCrx7LTkV2SmvPQ2oIuhr01pV2ZOgxenkmYsJetckeceG2zmnJdLheJdnMqTKayZXSJcRI8u86dMqWQKyc+RSOP3GRif9itMtprVuKlYhi+eyRnzeZJJq8a2WMW/LOv/TjNYbcd0Pck6/8SIH5J2os7zwIHB5ptLVJVwDP0gOhcstlmyXcJFDzE1iFQ8A35rW2y8DmSpTT/QaQLhaIHfC4TjIPqSvi3tNWcL7a8Bt3D/B6l1ake+AP4B/MzX3VS4BrjKtN5TG2GFZMiVnP6E9uxPh1vul/XkRuCHT76qQn0zrZYeuf4jgEi8zcQ+a1tq5kJ/91Kj/Yn9qJCTLT43eB76II9rKfwIMANimgzroXfBwAAAAAElFTkSuQmCC')
// // });
// // import * as Cookies from 'js-cookie';
// // import {getSession} from '@/lib/lib'
// /**
//  * Global wrapper for fetch
//  * @param {string} input - the url to request
//  * @param {object} init - initial variable for request
//  * @param {function} success - successful request handler
//  * @param {object} failure - code-handler mapped object
//  */
// // import React from 'react'
// //es6设置参数默认值
// import 'whatwg-fetch';
// import url from '../../package.json'
//
// let d = 1;
//
// function set() {
//     // return new promise(()=>{
//     //     setTimeout(()=>{return d+=2},100)
//     // });
//     fetch(url).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }
//
// async function b() {
//     let c = await set();
//     //得到的值是c是undefined
//     console.log(c);
// }
//
// b();

/*
 * 排序算法
 * 1，冒泡排序
 * */
let arr = [2, 1, 4, 5, 6, 3, 2, 6, 2, 7, 3];
// 相邻的进行比较
for ( let i = 0; i < arr.length; i++ ) {
  //不能用i因为i=0的时候循环就j循环10次，等于1的时候在循环10次
  for ( let j = 1; j < arr.length; j++ ) {
    if (arr[j] > arr[j - 1]) { //相邻的进行比较
	  let _j = arr[j - 1];
	  arr[j - 1] = arr[j]; // 相邻的交换位置
	  arr[j] = _j;
    }
  }
}
console.log(arr);


function timeout(ms) {
  return new Promise(() => {
    setTimeout((resolve) => {
	  return resolve;
    }, ms);
  });
}

let asyncPrint = (value, ms) => {
  // let a = await timeout(ms);
  timeout(ms);
  console.log(value);
};

asyncPrint('hello world', 1000);

function a(n) {
  if (typeof n == 'number' && 2 < n < 32) {
    let arr = [];
    for ( let i = 0; i < n; i++ ) {
	  let b = Math.floor(Math.random() * 31 + 2);
	  if (b == arr[i]) {
        return false;
	  } else {
        arr.push(b);
	  }
    }
  }
  return arr;
}

console.log(a(3));
