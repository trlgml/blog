### 基本方式
> server @Injectable()装饰声明service类
```
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}
```
> controller controller声明了依赖service构造器
```
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```
> module 类CatsService从cats.service.ts中引入，写入providers中
```
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
```
> CatsController，它首先查找所有依赖项。找到CatsService依赖项后, 对CatsService类执行查询，Nest随后将创建的实例CatsService，将其缓存并返回，或者如果已被缓存，则返回现有实例。

### 完整语法
```
providers: [
  {
    provide: CatsService,
    useClass: CatsService,
  },
];
```
等价于
```
providers: [CatsService]
```
### 其他使用方式
> 模拟CatsService/该useValue语法对于注入常量值
```
import { CatsService } from './cats.service';

const mockCatsService = {
  /* mock implementation
  ...
  */
};

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
  ],
})
export class AppModule {}
```
> 灵活使用字符串或符号作为DI令牌/该useValue语法对于注入常量值
```
import { CatsService } from './cats/cats.service';

@Module({
  providers: [
    {
      provide: 'CONNECTION',
      useValue: CatsService,
    },
  ],
})
export class AppModule {}
```
>
```
import { Controller, Get, Inject } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(@Inject('CONNECTION') private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```
> 根据环境注入不同的服务
```
const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};

@Module({
  providers: [configServiceProvider],
})
export class AppModule {}
```
> 工厂函数(将以inject相同的顺序将列表中的实例作为参数传递给factory函数)
```
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
})
export class AppModule {}

```
> 别名
```
@Injectable()
class LoggerService {
  /* implementation details */
}

const loggerAliasProvider = {
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
};

@Module({
  providers: [LoggerService, loggerAliasProvider],
})
export class AppModule {}

```