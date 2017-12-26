/*
/!*
* 公用的方法
* *!/


/!*
* fetch请求参数
* 1，input ：定义要获取的资源，（可能是） USVString字符串
* 2，init 一个配置项对象，
*      (1)：method:请求方法如GET POST PUT
*      (2)：headers：设置请求头
*      (3)：body：设置请求参数，为一个对象}
*      (4)：mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
*
*返回值是 Promise对象
* *!/

import 'whatwg-fetch';
let common =
    //获取地址栏参数
    getUrlParameter: function (name)
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
};

//进行请求。等测试
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
export const fetch = async (input, init = }, success, failure = }) =>
    try
        let res = await window.fetch(
            input,

                ...init,
                cache: 'default',
                headers:
                    "Content-Type": "application/json", //表单的提交与获取
                },
            });
        let json = await res.json();
        if (typeof success === 'function')
            return success(json)
        }
    } catch (error)
        console.error(error)
    }
};*/
