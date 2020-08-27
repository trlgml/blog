### 使用Nest CLI设置新项目
```
npm i -g @nestjs/cli
nest new project
```
- 安装缓慢可考虑更改 npm 镜像源，nrm使用方式。
***
```
$ npm i -g nrm

$ nrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/

$ nrm use taobao

```
***
### 文件说明

文件 | 描述
---|---
app.controller.ts|	单一路径的基本控制器样本。
app.module.ts|	应用程序的根模块。
main.ts|	使用核心功能NestFactory创建Nest应用程序实例的应用程序的入口文件。

- main.ts包括一个异步功能。NestFactory公开了一些允许创建应用程序实例的静态方法。该create()方法返回一个实现INestApplication接口的应用程序对象。
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

### Controllers
> 控制器负责处理传入的请求并将响应返回给客户端。我们将使用@Controller()装饰器，它是定义基本控制器所**必需的**。我们将指定一个可选的路由路径前缀cats。在@Controller()装饰器中使用路径前缀可以使我们轻松地对一组相关的路由进行分组，并最大程度地减少重复代码。
```
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```
> 会为的请求生成路由映射GET /cats，Nest将请求路由到我们的用户定义的findAll()方法。我们在此处选择的方法名称完全是任意的，Nest不对选择的方法名称赋予任何意义。
```
要使用CLI创建控制器，只需执行$ nest g controller cats命令
```

###### Nest运用两个不同的方式来操纵响应
方式     | 描述
---|---
推荐| 使用此内置方法，当请求处理程序返回JavaScript对象或数组时，它将自动序列化为JSON。当它返回一个JavaScript基本类型（例如string，number，boolean）。此外，响应的状态码默认情况下始终为200，但使用201的POST请求除外。我们可以通过@HttpCode(...)在处理程序级别添加装饰器来轻松更改此行为（请参见状态码）。
特定|	我们可以使用特定于库的（例如Express）响应对象，可以使用@Res()装饰器将其注入到方法处理程序签名（例如findAll(@Res() response)）中。通过这种方法，您有能力（也有责任）使用该对象公开的本机响应处理方法。例如，使用Express，您可以使用以下代码构建响应response.status(200).send()
> 您不能同时使用两种方法。Nest检测到处理程序何时使用@Res()或@Next()，表明您已选择特定于库的选项。如果同时使用两种方法，则将针对该单条路线自动禁用 “标准”方法，并且该方法将不再按预期工作。

Nest   |	Express
---|---
@Request() / @Req()| req
@Response() / @Res()|	res
@Next()|	next
@Session()|	req.session
@Param(param?: string)|	req.params[param]
@Body(param?: string)|	req.body[param]
@Query(param?: string)|	req.query[param]
@Headers(param?: string)|	req.headers[param]
```
import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class AppController {
  @Get()
  findAll(@Req() request: Request, @Res() response: Response) {
    response.status(HttpStatus.OK).send('This action returns all cats')
  }
}
```
###### 更多方法
> Nest 提供了标准的HTTP请求端点装饰的其余部分以相同的方式- ，@Put()，@Delete()，@Patch()，@Options()，@Head()和@All()。每个代表各自的HTTP请求方法。
```
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```
###### 通配符
```
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```
###### 状态代码
```
import { HttpCode, Post } from '@nestjs/common';

@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```
###### 响应头
```
import { Header, Post } from '@nestjs/common';
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```
###### 重定向
```
import { Get, Redirect } from '@nestjs/common';

@Get()
@Redirect('https://nestjs.com', 301)
```
###### 路由参数
```
import { Get, Param } from '@nestjs/common';

@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```
###### 异步
- async / await
```
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```
- RxJS observable streams
```
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```
###### 我们使用@Module()装饰器将元数据附加到模块类(app.module.ts)
```
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
```
### Providers
普通的JavaScript类，在类声明之前带有@Injectable()装饰器。
```
import { Injectable } from '@nestjs/common';

interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```
```
要使用CLI创建服务，只需执行$ nest g service cats命令
```
###### 依赖注入
> Nest将通过CatsService创建并返回的实例到catsService，并传递给控制器的构造函数
```
constructor(private readonly catsService: CatsService) {}
```
###### 现在我们已经定义了（CatsService），并且已经有了该服务的使用者（CatsController），我们需要在Nest中注册该服务，以便它可以执行注入。为此，我们编辑模块文件（app.module.ts），然后将服务添加到装饰器的providers数组中@Module()
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
### Modules
> 模块是带有@Module()装饰器的类。@Module()装饰提供了元数据Nest利用的组织应用程序结构。每个应用程序至少有一个模块，一个根模块。根模块是Nest用来构建应用程序图的起点-Nest 用来解析模块和提供者关系以及依赖关系的内部数据结构。虽然从理论上讲很小的应用程序可能只有根模块，但这不是典型的情况。我们要强调，强烈建议将模块作为组织组件的有效方法。因此，对于大多数应用而言，最终的架构将采用多个模块，每个模块封装一组紧密相关的功能。


属性 | 描述
---|---
providers|	Nest注入器将实例化的提供程序，并且至少可以在此模块之间共享这些提供程序
controllers|	此模块中定义的必须实例化的一组控制器
imports|	导出模块所需的提供程序的导入模块列表
exports|	providers该模块提供的子集，并且应该在导入该模块的其他模块中可用

> CatsController与CatsService属于同一应用程序域.我们将创建CatsModule

```
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}
```
```
要使用CLI创建模块，只需执行$ nest g module cats命令
```
> 我们CatsModule在cats.module.ts文件中定义了，并将与此模块相关的所有内容都移到了cats目录中。我们需要做的最后一件事是将该模块导入根模块（文件中AppModule定义的app.module.ts）
```
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```
### Middleware
> 中间件是在路由处理程序之前调用的函数。对请求和响应对象进行更改。结束请求-响应周期。调用堆栈中的下一个中间件函数。如果当前的中间件功能没有结束请求-响应周期，则必须调用next()将控制权传递给下一个中间件功能。否则，该请求将被挂起。

> 可以在函数中或在带有@Injectable()装饰器的类中实现自定义Nest中间件(logger.middleware.ts)
```
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
```
> 当您的中间件不需要任何依赖项时，请考虑使用函数中间件更简单
```
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};
```
###### 应用中间件
> @Module()装饰器中没有中间件的位置。相反，我们使用configure()模块类的方法进行设置。包含中间件的模块必须实现该NestModule接口。让我们LoggerMiddleware在AppModule级别上进行设置。
```
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');// cats路径的所以请求
      //.forRoutes({ path: 'cats', method: RequestMethod.GET });cats的get请求
      //forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });匹配'ab*cd'路由的所有请求
  }
}
```
###### 全局中间件
> 如果要一次将中间件绑定到每个注册的路由，则可以使用实例INestApplication提供的方法use()
```
function logger(req, res, next) {
  next();
}
const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);
```
###### 多个中间件
> 为了绑定顺序执行的多个中间件，只需在apply()方法内部提供一个逗号分隔的列表：
```
consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
```
###### Middleware consumer
```
consumer
  .apply(LoggerMiddleware)
  .exclude(
    { path: 'cats', method: RequestMethod.GET },
    { path: 'cats', method: RequestMethod.POST }
  )
  .forRoutes(CatsController);
```
### Exception filters
> Nest带有内置的异常层，该层负责处理应用程序中所有未处理的异常。当您的应用程序代码未处理异常时，该层将捕获该异常，然后自动发送适当的用户友好响应。开箱即用，此操作由内置的全局异常过滤器执行，该过滤器处理类型HttpException（及其子类）的异常。如果无法识别异常（既不HttpException是继承自的类也不是HttpException），则内置异常过滤器会生成以下默认JSON响应：
```
{
  "statusCode": 500,
  "message": "Internal server error"
}

```
###### 抛出标准异常
```
@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}
```
###### 自定义异常
```
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}


@Get()
async findAll() {
  throw new ForbiddenException();
}
```
######  内置的HTTP exceptions
```
BadRequestException
UnauthorizedException
NotFoundException
ForbiddenException
NotAcceptableException
RequestTimeoutException
ConflictException
GoneException
PayloadTooLargeException
UnsupportedMediaTypeException
UnprocessableEntityException
InternalServerErrorException
NotImplementedException
BadGatewayException
ServiceUnavailableException
GatewayTimeoutException
```
###### Exception filters
> 您可能希望完全控制异常层,例如，您可能要添加日志记录或基于一些动态因素使用其他JSON模式。
(http-exception.filter.ts)
```
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
```
```
所有异常过滤器都应实现通用ExceptionFilter<T>接口。这要求您向catch(exception: T, host: ArgumentsHost)方法提供其指示的签名。T指示异常的类型。
```
> 使用方式
```
@Post()
//@UseFilters(new HttpExceptionFilter())
@UseFilters(HttpExceptionFilter)
async create() {
  throw new ForbiddenException();
}
```
```
//@UseFilters(new HttpExceptionFilter())
@UseFilters(HttpExceptionFilter)
export class CatsController {}
```
```
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```
> 捕捉全部异常.为了捕获每个未处理的异常（无论异常类型如何），请将@Catch()修饰符的参数列表保留为空.
```
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```
### Pipes
> 管道是用@Injectable()装饰器注释的类。管道应实现该PipeTransform接口

- 转换：将输入数据转换为所需的输出
- 验证：评估输入数据，如果有效，只需将其原样传递即可；否则，当数据不正确时抛出异常
> 管道arguments均由控制器路由处理程序处理。Nest会在调用方法之前插入一个管道，并且管道会接收指定给该方法的参数。那时将进行任何转换或验证操作，然后使用任何（可能）转换后的参数调用路由处理程序。管道在例外区域内运行。这意味着，当Pipe引发异常时，它由异常层（全局异常过滤器和应用于当前上下文的所有异常过滤器）处理。鉴于以上所述，应该清楚的是，当在Pipe中引发异常时，随后将不执行任何控制器方法。

###### 内置管道
- ValidationPipe
- ParseIntPipe
- ParseUUIDPipe

### Interceptor

### Guard

### Decorator

### 循环引用的问题解决
- 服务的循环引用
```
import { Injectable, Inject, forwardRef } from '@nestjs/common';
// CommonService依赖注入了CatsService，而CatsService也依赖注入了CommonService
@Injectable()
export class CatsService {
    public constructor(
        @Inject(forwardRef(() => CommonService))
        private readonly commonService: CommonService,
    ) { }
}
@Injectable()
export class CommonService {
    public constructor(
        @Inject(forwardRef(() => CatsService))
        private readonly catsService: CatsService,
    ) { }
}
```
- 模块的循环引用
```
@Module({
   imports: [forwardRef(() => CommonModule)],
})
export class CatsModule {}

@Module({
   imports: [forwardRef(() => CatsModule)],
})
export class CommonModule {}
```
- 其他 
```
import { Injectable, OnModuleInit } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ModuleRef } from '@nestjs/core';
/**
 * 3.Nest提供了ModuleRef可以简单地注入任何组件的类。也是解决循环依赖的方式
 */
@Injectable()
export class ModuleService implements OnModuleInit {
    private service: CatsService;
    public constructor(private readonly moduleRef: ModuleRef) { }
    
    public onModuleInit() {
        // ModuleRef有一个get()方法，允许检索当前模块中可用的提供程序。此外，您可以切换到非严格模式，这样您就可以在整个应用程序中选择任何现有的提供程序。
        this.service = this.moduleRef.get(CatsService, { strict: false });
    }
}
```