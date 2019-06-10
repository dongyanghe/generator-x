# x-generator

#### 介绍


#### 软件架构
软件架构说明


#### 安装教程

1. xxxx
2. xxxx
3. xxxx

#### 使用说明

1. xxxx
2. xxxx
3. xxxx
命令行指令
您还可以使用以下说明从计算机上传现有文件。

#### 生命周期
```TypeScript
const Generator = require('yeoman-generator');module.exports = class extends Generator{
    initianlizing(){        //获取当前项目状态，获取基本配置参数等
    }
    prompting(){        //向用户展示交互式问题收集关键参数
    }
    configuring(){        //保存配置相关信息且生成配置文件（名称多为'.'开头的配置文件,例如.editorconfig）
    }
    default(){        //未匹配任何生命周期方法的非私有方法均在此环节*自动*执行
    }
    writing(){        //依据模板进行新项目结构的写操作
    }
    conflicts(){        //处理冲突(内部调用，一般不用处理）
    }
    install(){        //使用指定的包管理工具进行依赖安装(支持npm,bower,yarn)
    }
    end(){        //结束动作，例如清屏，输出结束信息，say GoodBye等等
    }
}
```
#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
