# Graphql 探索

记录探索graphql过程

## 初识Graphql

GraphQL schema是强类型的，可使用SDL(GraphQL Schema Definition Language)来定义。

相对而言，强类型系统使开发人员自行车换摩托。

比如，可以使用构建工具验证API请求，编译时检查API调用可能发生的错误，甚至可以在代码编辑器中自动完成API操作。

schema带来的另一个好处是，不用再去编写API文档——因为根据schema自动生成了，这改变了API开发的玩法。

### 解决的问题

>> Overfetching

Overfetching意味着前端得到了实际不需要的数据，这可能会造成性能和带宽浪费。

栗子：个人资料页面需要呈现用户姓名和生日；提供用户信息的API(如/users/id)还会返回用户的地址和账单信息，但这在个人资料页面没有用，也没必要。

>>Underfetching

Underfetching与Overfetching想反，API返回中缺少足够的数据，这意味着前端需要请求额外的API得到需要的数据。

最坏的场景下，不足的结果会导致臭名昭著的N+1请求问题：获取数据列表，而没有API能够满足列表字段要求，不得不对每行数据发起一次请求，以获取所需数据。

栗子：假设我们在捣鼓一个博客应用。显示 user列表，除user本身信息外，还要显示每个user最近一篇文章的title。然而，调用/users/仅得到user集合，不得不对每个user调用/users/<id>/articles获取其最新文章。

说明：当然你可以再写一个API来满足特殊场景，如/users/lastarticles/来满足上面的需求

### done
1. Graphql文档查询与变更(元数据和内连片段需要配合scheme处查看)
2. Graphql文档schema定义 ([https://juejin.im/entry/6ae276f551882567161a489d](scalar) )
3. 测试自建服务各种查询([https://www.graphqlbin.com/v3/gLVRcG](共享的模板))

