使用axios的取消请求CanselToken

CanselToken中执行器函数的参数cb调用可以停止请求

```xml
const CanselToken = axios.CancelToken 
config.cancelToken = new CanselToken((cb => {
        const url = config.url
        store.commit('ADD_FN', { url: url, cb: cb })
    }))
```

做法：在axios拦截器中，把每次请求的url存起来到vuex中

响应拦截器，每次相应的url都删掉这个记录

在路由router路由器的.befoEach全局前置路由守卫中，每次跳转都执行vue中存储的拦截器cb。cb执行就会取消掉没有回来的请求