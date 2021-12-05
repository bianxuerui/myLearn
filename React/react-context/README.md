##### Context API

1. 创建一个 Context 对象
2. 创建 Provider，传递 value
3. 子组件消费 value
   1. contextType
      1. 只能用在类组件，只能订阅单一的 context 来源
   2. useContext
      1. 只能用在函数组件或者自定义 hook 中
   3. consumer
      1. 不限制函数或者类组件
