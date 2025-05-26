
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Modulo
 * 
 */
export type Modulo = $Result.DefaultSelection<Prisma.$ModuloPayload>
/**
 * Model Tipo
 * 
 */
export type Tipo = $Result.DefaultSelection<Prisma.$TipoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Consultas
 * 
 */
export type Consultas = $Result.DefaultSelection<Prisma.$ConsultasPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Stats
 * 
 */
export type Stats = $Result.DefaultSelection<Prisma.$StatsPayload>
/**
 * Model UserView
 * 
 */
export type UserView = $Result.DefaultSelection<Prisma.$UserViewPayload>
/**
 * Model BlogComment
 * 
 */
export type BlogComment = $Result.DefaultSelection<Prisma.$BlogCommentPayload>
/**
 * Model BlogLike
 * 
 */
export type BlogLike = $Result.DefaultSelection<Prisma.$BlogLikePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulo`: Exposes CRUD operations for the **Modulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulo.findMany()
    * ```
    */
  get modulo(): Prisma.ModuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo`: Exposes CRUD operations for the **Tipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos
    * const tipos = await prisma.tipo.findMany()
    * ```
    */
  get tipo(): Prisma.TipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultas`: Exposes CRUD operations for the **Consultas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consultas.findMany()
    * ```
    */
  get consultas(): Prisma.ConsultasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stats.findMany()
    * ```
    */
  get stats(): Prisma.StatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userView`: Exposes CRUD operations for the **UserView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserViews
    * const userViews = await prisma.userView.findMany()
    * ```
    */
  get userView(): Prisma.UserViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogComment`: Exposes CRUD operations for the **BlogComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogComments
    * const blogComments = await prisma.blogComment.findMany()
    * ```
    */
  get blogComment(): Prisma.BlogCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogLike`: Exposes CRUD operations for the **BlogLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogLikes
    * const blogLikes = await prisma.blogLike.findMany()
    * ```
    */
  get blogLike(): Prisma.BlogLikeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    Modulo: 'Modulo',
    Tipo: 'Tipo',
    User: 'User',
    Consultas: 'Consultas',
    Blog: 'Blog',
    Stats: 'Stats',
    UserView: 'UserView',
    BlogComment: 'BlogComment',
    BlogLike: 'BlogLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "modulo" | "tipo" | "user" | "consultas" | "blog" | "stats" | "userView" | "blogComment" | "blogLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Modulo: {
        payload: Prisma.$ModuloPayload<ExtArgs>
        fields: Prisma.ModuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findFirst: {
            args: Prisma.ModuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findMany: {
            args: Prisma.ModuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          create: {
            args: Prisma.ModuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          createMany: {
            args: Prisma.ModuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          delete: {
            args: Prisma.ModuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          update: {
            args: Prisma.ModuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          deleteMany: {
            args: Prisma.ModuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          upsert: {
            args: Prisma.ModuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          aggregate: {
            args: Prisma.ModuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulo>
          }
          groupBy: {
            args: Prisma.ModuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuloCountArgs<ExtArgs>
            result: $Utils.Optional<ModuloCountAggregateOutputType> | number
          }
        }
      }
      Tipo: {
        payload: Prisma.$TipoPayload<ExtArgs>
        fields: Prisma.TipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findFirst: {
            args: Prisma.TipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findMany: {
            args: Prisma.TipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          create: {
            args: Prisma.TipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          createMany: {
            args: Prisma.TipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          delete: {
            args: Prisma.TipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          update: {
            args: Prisma.TipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          upsert: {
            args: Prisma.TipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          aggregate: {
            args: Prisma.TipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo>
          }
          groupBy: {
            args: Prisma.TipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Consultas: {
        payload: Prisma.$ConsultasPayload<ExtArgs>
        fields: Prisma.ConsultasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>
          }
          findFirst: {
            args: Prisma.ConsultasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>
          }
          findMany: {
            args: Prisma.ConsultasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>[]
          }
          create: {
            args: Prisma.ConsultasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>
          }
          createMany: {
            args: Prisma.ConsultasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>[]
          }
          delete: {
            args: Prisma.ConsultasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>
          }
          update: {
            args: Prisma.ConsultasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>
          }
          deleteMany: {
            args: Prisma.ConsultasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>[]
          }
          upsert: {
            args: Prisma.ConsultasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultasPayload>
          }
          aggregate: {
            args: Prisma.ConsultasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultas>
          }
          groupBy: {
            args: Prisma.ConsultasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultasCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultasCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Stats: {
        payload: Prisma.$StatsPayload<ExtArgs>
        fields: Prisma.StatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findFirst: {
            args: Prisma.StatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findMany: {
            args: Prisma.StatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          create: {
            args: Prisma.StatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          createMany: {
            args: Prisma.StatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          delete: {
            args: Prisma.StatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          update: {
            args: Prisma.StatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          deleteMany: {
            args: Prisma.StatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          upsert: {
            args: Prisma.StatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          aggregate: {
            args: Prisma.StatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStats>
          }
          groupBy: {
            args: Prisma.StatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatsCountArgs<ExtArgs>
            result: $Utils.Optional<StatsCountAggregateOutputType> | number
          }
        }
      }
      UserView: {
        payload: Prisma.$UserViewPayload<ExtArgs>
        fields: Prisma.UserViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>
          }
          findFirst: {
            args: Prisma.UserViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>
          }
          findMany: {
            args: Prisma.UserViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>[]
          }
          create: {
            args: Prisma.UserViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>
          }
          createMany: {
            args: Prisma.UserViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>[]
          }
          delete: {
            args: Prisma.UserViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>
          }
          update: {
            args: Prisma.UserViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>
          }
          deleteMany: {
            args: Prisma.UserViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>[]
          }
          upsert: {
            args: Prisma.UserViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserViewPayload>
          }
          aggregate: {
            args: Prisma.UserViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserView>
          }
          groupBy: {
            args: Prisma.UserViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserViewCountArgs<ExtArgs>
            result: $Utils.Optional<UserViewCountAggregateOutputType> | number
          }
        }
      }
      BlogComment: {
        payload: Prisma.$BlogCommentPayload<ExtArgs>
        fields: Prisma.BlogCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          findFirst: {
            args: Prisma.BlogCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          findMany: {
            args: Prisma.BlogCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          create: {
            args: Prisma.BlogCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          createMany: {
            args: Prisma.BlogCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          delete: {
            args: Prisma.BlogCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          update: {
            args: Prisma.BlogCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          deleteMany: {
            args: Prisma.BlogCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          upsert: {
            args: Prisma.BlogCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          aggregate: {
            args: Prisma.BlogCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogComment>
          }
          groupBy: {
            args: Prisma.BlogCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCommentCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCommentCountAggregateOutputType> | number
          }
        }
      }
      BlogLike: {
        payload: Prisma.$BlogLikePayload<ExtArgs>
        fields: Prisma.BlogLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          findFirst: {
            args: Prisma.BlogLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          findMany: {
            args: Prisma.BlogLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>[]
          }
          create: {
            args: Prisma.BlogLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          createMany: {
            args: Prisma.BlogLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>[]
          }
          delete: {
            args: Prisma.BlogLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          update: {
            args: Prisma.BlogLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          deleteMany: {
            args: Prisma.BlogLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>[]
          }
          upsert: {
            args: Prisma.BlogLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogLikePayload>
          }
          aggregate: {
            args: Prisma.BlogLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogLike>
          }
          groupBy: {
            args: Prisma.BlogLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogLikeCountArgs<ExtArgs>
            result: $Utils.Optional<BlogLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    modulo?: ModuloOmit
    tipo?: TipoOmit
    user?: UserOmit
    consultas?: ConsultasOmit
    blog?: BlogOmit
    stats?: StatsOmit
    userView?: UserViewOmit
    blogComment?: BlogCommentOmit
    blogLike?: BlogLikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    modulos: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulos?: boolean | ProductCountOutputTypeCountModulosArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountModulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
  }


  /**
   * Count Type TipoCountOutputType
   */

  export type TipoCountOutputType = {
    productos: number
  }

  export type TipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | TipoCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCountOutputType
     */
    select?: TipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comentarios: number
    likes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | UserCountOutputTypeCountComentariosArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogLikeWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    comentarios: number
    likes: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | BlogCountOutputTypeCountComentariosArgs
    likes?: boolean | BlogCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogLikeWhereInput
  }


  /**
   * Count Type StatsCountOutputType
   */

  export type StatsCountOutputType = {
    userViews: number
    cantidadDeConsultas: number
  }

  export type StatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userViews?: boolean | StatsCountOutputTypeCountUserViewsArgs
    cantidadDeConsultas?: boolean | StatsCountOutputTypeCountCantidadDeConsultasArgs
  }

  // Custom InputTypes
  /**
   * StatsCountOutputType without action
   */
  export type StatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsCountOutputType
     */
    select?: StatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatsCountOutputType without action
   */
  export type StatsCountOutputTypeCountUserViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewWhereInput
  }

  /**
   * StatsCountOutputType without action
   */
  export type StatsCountOutputTypeCountCantidadDeConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    precioAntes: Decimal | null
    precioAhora: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    precioAntes: Decimal | null
    precioAhora: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    precioAntes: Decimal | null
    precioAhora: Decimal | null
    video: string | null
    url_demo: string | null
    url_full: string | null
    tipoId: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    precioAntes: Decimal | null
    precioAhora: Decimal | null
    video: string | null
    url_demo: string | null
    url_full: string | null
    tipoId: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    precioAntes: number
    precioAhora: number
    imagenes: number
    video: number
    url_demo: number
    url_full: number
    tipoId: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    precioAntes?: true
    precioAhora?: true
  }

  export type ProductSumAggregateInputType = {
    precioAntes?: true
    precioAhora?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    precioAntes?: true
    precioAhora?: true
    video?: true
    url_demo?: true
    url_full?: true
    tipoId?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    precioAntes?: true
    precioAhora?: true
    video?: true
    url_demo?: true
    url_full?: true
    tipoId?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    precioAntes?: true
    precioAhora?: true
    imagenes?: true
    video?: true
    url_demo?: true
    url_full?: true
    tipoId?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    titulo: string
    descripcion: string
    precioAntes: Decimal | null
    precioAhora: Decimal
    imagenes: string[]
    video: string
    url_demo: string | null
    url_full: string | null
    tipoId: string
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precioAntes?: boolean
    precioAhora?: boolean
    imagenes?: boolean
    video?: boolean
    url_demo?: boolean
    url_full?: boolean
    tipoId?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modulos?: boolean | Product$modulosArgs<ExtArgs>
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precioAntes?: boolean
    precioAhora?: boolean
    imagenes?: boolean
    video?: boolean
    url_demo?: boolean
    url_full?: boolean
    tipoId?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precioAntes?: boolean
    precioAhora?: boolean
    imagenes?: boolean
    video?: boolean
    url_demo?: boolean
    url_full?: boolean
    tipoId?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precioAntes?: boolean
    precioAhora?: boolean
    imagenes?: boolean
    video?: boolean
    url_demo?: boolean
    url_full?: boolean
    tipoId?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "precioAntes" | "precioAhora" | "imagenes" | "video" | "url_demo" | "url_full" | "tipoId" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulos?: boolean | Product$modulosArgs<ExtArgs>
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      modulos: Prisma.$ModuloPayload<ExtArgs>[]
      tipo: Prisma.$TipoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descripcion: string
      precioAntes: Prisma.Decimal | null
      precioAhora: Prisma.Decimal
      imagenes: string[]
      video: string
      url_demo: string | null
      url_full: string | null
      tipoId: string
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulos<T extends Product$modulosArgs<ExtArgs> = {}>(args?: Subset<T, Product$modulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tipo<T extends TipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDefaultArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly titulo: FieldRef<"Product", 'String'>
    readonly descripcion: FieldRef<"Product", 'String'>
    readonly precioAntes: FieldRef<"Product", 'Decimal'>
    readonly precioAhora: FieldRef<"Product", 'Decimal'>
    readonly imagenes: FieldRef<"Product", 'String[]'>
    readonly video: FieldRef<"Product", 'String'>
    readonly url_demo: FieldRef<"Product", 'String'>
    readonly url_full: FieldRef<"Product", 'String'>
    readonly tipoId: FieldRef<"Product", 'String'>
    readonly visible: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.modulos
   */
  export type Product$modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    cursor?: ModuloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Modulo
   */

  export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  export type ModuloMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    productId: string | null
  }

  export type ModuloMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    productId: string | null
  }

  export type ModuloCountAggregateOutputType = {
    id: number
    titulo: number
    subtitulos: number
    productId: number
    _all: number
  }


  export type ModuloMinAggregateInputType = {
    id?: true
    titulo?: true
    productId?: true
  }

  export type ModuloMaxAggregateInputType = {
    id?: true
    titulo?: true
    productId?: true
  }

  export type ModuloCountAggregateInputType = {
    id?: true
    titulo?: true
    subtitulos?: true
    productId?: true
    _all?: true
  }

  export type ModuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulo to aggregate.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modulos
    **/
    _count?: true | ModuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuloMaxAggregateInputType
  }

  export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo[P]>
      : GetScalarType<T[P], AggregateModulo[P]>
  }




  export type ModuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithAggregationInput | ModuloOrderByWithAggregationInput[]
    by: ModuloScalarFieldEnum[] | ModuloScalarFieldEnum
    having?: ModuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuloCountAggregateInputType | true
    _min?: ModuloMinAggregateInputType
    _max?: ModuloMaxAggregateInputType
  }

  export type ModuloGroupByOutputType = {
    id: string
    titulo: string
    subtitulos: string[]
    productId: string
    _count: ModuloCountAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  type GetModuloGroupByPayload<T extends ModuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuloGroupByOutputType[P]>
            : GetScalarType<T[P], ModuloGroupByOutputType[P]>
        }
      >
    >


  export type ModuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulos?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulos?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulos?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectScalar = {
    id?: boolean
    titulo?: boolean
    subtitulos?: boolean
    productId?: boolean
  }

  export type ModuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "subtitulos" | "productId", ExtArgs["result"]["modulo"]>
  export type ModuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ModuloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ModuloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ModuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modulo"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      subtitulos: string[]
      productId: string
    }, ExtArgs["result"]["modulo"]>
    composites: {}
  }

  type ModuloGetPayload<S extends boolean | null | undefined | ModuloDefaultArgs> = $Result.GetResult<Prisma.$ModuloPayload, S>

  type ModuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuloCountAggregateInputType | true
    }

  export interface ModuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modulo'], meta: { name: 'Modulo' } }
    /**
     * Find zero or one Modulo that matches the filter.
     * @param {ModuloFindUniqueArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuloFindUniqueArgs>(args: SelectSubset<T, ModuloFindUniqueArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuloFindUniqueOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuloFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuloFindFirstArgs>(args?: SelectSubset<T, ModuloFindFirstArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuloFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulo.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduloWithIdOnly = await prisma.modulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuloFindManyArgs>(args?: SelectSubset<T, ModuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modulo.
     * @param {ModuloCreateArgs} args - Arguments to create a Modulo.
     * @example
     * // Create one Modulo
     * const Modulo = await prisma.modulo.create({
     *   data: {
     *     // ... data to create a Modulo
     *   }
     * })
     * 
     */
    create<T extends ModuloCreateArgs>(args: SelectSubset<T, ModuloCreateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modulos.
     * @param {ModuloCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuloCreateManyArgs>(args?: SelectSubset<T, ModuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modulos and returns the data saved in the database.
     * @param {ModuloCreateManyAndReturnArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modulos and only return the `id`
     * const moduloWithIdOnly = await prisma.modulo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuloCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modulo.
     * @param {ModuloDeleteArgs} args - Arguments to delete one Modulo.
     * @example
     * // Delete one Modulo
     * const Modulo = await prisma.modulo.delete({
     *   where: {
     *     // ... filter to delete one Modulo
     *   }
     * })
     * 
     */
    delete<T extends ModuloDeleteArgs>(args: SelectSubset<T, ModuloDeleteArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modulo.
     * @param {ModuloUpdateArgs} args - Arguments to update one Modulo.
     * @example
     * // Update one Modulo
     * const modulo = await prisma.modulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuloUpdateArgs>(args: SelectSubset<T, ModuloUpdateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modulos.
     * @param {ModuloDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuloDeleteManyArgs>(args?: SelectSubset<T, ModuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuloUpdateManyArgs>(args: SelectSubset<T, ModuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos and returns the data updated in the database.
     * @param {ModuloUpdateManyAndReturnArgs} args - Arguments to update many Modulos.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modulos and only return the `id`
     * const moduloWithIdOnly = await prisma.modulo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuloUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modulo.
     * @param {ModuloUpsertArgs} args - Arguments to update or create a Modulo.
     * @example
     * // Update or create a Modulo
     * const modulo = await prisma.modulo.upsert({
     *   create: {
     *     // ... data to create a Modulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo we want to update
     *   }
     * })
     */
    upsert<T extends ModuloUpsertArgs>(args: SelectSubset<T, ModuloUpsertArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulo.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends ModuloCountArgs>(
      args?: Subset<T, ModuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuloAggregateArgs>(args: Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>

    /**
     * Group by Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuloGroupByArgs['orderBy'] }
        : { orderBy?: ModuloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modulo model
   */
  readonly fields: ModuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Modulo model
   */
  interface ModuloFieldRefs {
    readonly id: FieldRef<"Modulo", 'String'>
    readonly titulo: FieldRef<"Modulo", 'String'>
    readonly subtitulos: FieldRef<"Modulo", 'String[]'>
    readonly productId: FieldRef<"Modulo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Modulo findUnique
   */
  export type ModuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findUniqueOrThrow
   */
  export type ModuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findFirst
   */
  export type ModuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findFirstOrThrow
   */
  export type ModuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findMany
   */
  export type ModuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulos to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo create
   */
  export type ModuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to create a Modulo.
     */
    data: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
  }

  /**
   * Modulo createMany
   */
  export type ModuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modulo createManyAndReturn
   */
  export type ModuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modulo update
   */
  export type ModuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to update a Modulo.
     */
    data: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
    /**
     * Choose, which Modulo to update.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo updateMany
   */
  export type ModuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to update.
     */
    limit?: number
  }

  /**
   * Modulo updateManyAndReturn
   */
  export type ModuloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modulo upsert
   */
  export type ModuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The filter to search for the Modulo to update in case it exists.
     */
    where: ModuloWhereUniqueInput
    /**
     * In case the Modulo found by the `where` argument doesn't exist, create a new Modulo with this data.
     */
    create: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
    /**
     * In case the Modulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
  }

  /**
   * Modulo delete
   */
  export type ModuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter which Modulo to delete.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo deleteMany
   */
  export type ModuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulos to delete
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to delete.
     */
    limit?: number
  }

  /**
   * Modulo without action
   */
  export type ModuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
  }


  /**
   * Model Tipo
   */

  export type AggregateTipo = {
    _count: TipoCountAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  export type TipoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
  }

  export type TipoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
  }

  export type TipoCountAggregateOutputType = {
    id: number
    titulo: number
    _all: number
  }


  export type TipoMinAggregateInputType = {
    id?: true
    titulo?: true
  }

  export type TipoMaxAggregateInputType = {
    id?: true
    titulo?: true
  }

  export type TipoCountAggregateInputType = {
    id?: true
    titulo?: true
    _all?: true
  }

  export type TipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo to aggregate.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tipos
    **/
    _count?: true | TipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoMaxAggregateInputType
  }

  export type GetTipoAggregateType<T extends TipoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo[P]>
      : GetScalarType<T[P], AggregateTipo[P]>
  }




  export type TipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoWhereInput
    orderBy?: TipoOrderByWithAggregationInput | TipoOrderByWithAggregationInput[]
    by: TipoScalarFieldEnum[] | TipoScalarFieldEnum
    having?: TipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCountAggregateInputType | true
    _min?: TipoMinAggregateInputType
    _max?: TipoMaxAggregateInputType
  }

  export type TipoGroupByOutputType = {
    id: string
    titulo: string
    _count: TipoCountAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  type GetTipoGroupByPayload<T extends TipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoGroupByOutputType[P]>
        }
      >
    >


  export type TipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    productos?: boolean | Tipo$productosArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectScalar = {
    id?: boolean
    titulo?: boolean
  }

  export type TipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo", ExtArgs["result"]["tipo"]>
  export type TipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Tipo$productosArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tipo"
    objects: {
      productos: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
    }, ExtArgs["result"]["tipo"]>
    composites: {}
  }

  type TipoGetPayload<S extends boolean | null | undefined | TipoDefaultArgs> = $Result.GetResult<Prisma.$TipoPayload, S>

  type TipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCountAggregateInputType | true
    }

  export interface TipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tipo'], meta: { name: 'Tipo' } }
    /**
     * Find zero or one Tipo that matches the filter.
     * @param {TipoFindUniqueArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoFindUniqueArgs>(args: SelectSubset<T, TipoFindUniqueArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoFindUniqueOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoFindFirstArgs>(args?: SelectSubset<T, TipoFindFirstArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos
     * const tipos = await prisma.tipo.findMany()
     * 
     * // Get first 10 Tipos
     * const tipos = await prisma.tipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoWithIdOnly = await prisma.tipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoFindManyArgs>(args?: SelectSubset<T, TipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo.
     * @param {TipoCreateArgs} args - Arguments to create a Tipo.
     * @example
     * // Create one Tipo
     * const Tipo = await prisma.tipo.create({
     *   data: {
     *     // ... data to create a Tipo
     *   }
     * })
     * 
     */
    create<T extends TipoCreateArgs>(args: SelectSubset<T, TipoCreateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos.
     * @param {TipoCreateManyArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCreateManyArgs>(args?: SelectSubset<T, TipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipos and returns the data saved in the database.
     * @param {TipoCreateManyAndReturnArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipos and only return the `id`
     * const tipoWithIdOnly = await prisma.tipo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo.
     * @param {TipoDeleteArgs} args - Arguments to delete one Tipo.
     * @example
     * // Delete one Tipo
     * const Tipo = await prisma.tipo.delete({
     *   where: {
     *     // ... filter to delete one Tipo
     *   }
     * })
     * 
     */
    delete<T extends TipoDeleteArgs>(args: SelectSubset<T, TipoDeleteArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo.
     * @param {TipoUpdateArgs} args - Arguments to update one Tipo.
     * @example
     * // Update one Tipo
     * const tipo = await prisma.tipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoUpdateArgs>(args: SelectSubset<T, TipoUpdateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos.
     * @param {TipoDeleteManyArgs} args - Arguments to filter Tipos to delete.
     * @example
     * // Delete a few Tipos
     * const { count } = await prisma.tipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDeleteManyArgs>(args?: SelectSubset<T, TipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoUpdateManyArgs>(args: SelectSubset<T, TipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos and returns the data updated in the database.
     * @param {TipoUpdateManyAndReturnArgs} args - Arguments to update many Tipos.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipos and only return the `id`
     * const tipoWithIdOnly = await prisma.tipo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo.
     * @param {TipoUpsertArgs} args - Arguments to update or create a Tipo.
     * @example
     * // Update or create a Tipo
     * const tipo = await prisma.tipo.upsert({
     *   create: {
     *     // ... data to create a Tipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo we want to update
     *   }
     * })
     */
    upsert<T extends TipoUpsertArgs>(args: SelectSubset<T, TipoUpsertArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCountArgs} args - Arguments to filter Tipos to count.
     * @example
     * // Count the number of Tipos
     * const count = await prisma.tipo.count({
     *   where: {
     *     // ... the filter for the Tipos we want to count
     *   }
     * })
    **/
    count<T extends TipoCountArgs>(
      args?: Subset<T, TipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoAggregateArgs>(args: Subset<T, TipoAggregateArgs>): Prisma.PrismaPromise<GetTipoAggregateType<T>>

    /**
     * Group by Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoGroupByArgs['orderBy'] }
        : { orderBy?: TipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tipo model
   */
  readonly fields: TipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Tipo$productosArgs<ExtArgs> = {}>(args?: Subset<T, Tipo$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tipo model
   */
  interface TipoFieldRefs {
    readonly id: FieldRef<"Tipo", 'String'>
    readonly titulo: FieldRef<"Tipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tipo findUnique
   */
  export type TipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findUniqueOrThrow
   */
  export type TipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findFirst
   */
  export type TipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findFirstOrThrow
   */
  export type TipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findMany
   */
  export type TipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipos to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo create
   */
  export type TipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tipo.
     */
    data: XOR<TipoCreateInput, TipoUncheckedCreateInput>
  }

  /**
   * Tipo createMany
   */
  export type TipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo createManyAndReturn
   */
  export type TipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo update
   */
  export type TipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tipo.
     */
    data: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
    /**
     * Choose, which Tipo to update.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo updateMany
   */
  export type TipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo updateManyAndReturn
   */
  export type TipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo upsert
   */
  export type TipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tipo to update in case it exists.
     */
    where: TipoWhereUniqueInput
    /**
     * In case the Tipo found by the `where` argument doesn't exist, create a new Tipo with this data.
     */
    create: XOR<TipoCreateInput, TipoUncheckedCreateInput>
    /**
     * In case the Tipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
  }

  /**
   * Tipo delete
   */
  export type TipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter which Tipo to delete.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo deleteMany
   */
  export type TipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipos to delete
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to delete.
     */
    limit?: number
  }

  /**
   * Tipo.productos
   */
  export type Tipo$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Tipo without action
   */
  export type TipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    comentarios?: boolean | User$comentariosArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | User$comentariosArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comentarios: Prisma.$BlogCommentPayload<ExtArgs>[]
      likes: Prisma.$BlogLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comentarios<T extends User$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, User$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.comentarios
   */
  export type User$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    cursor?: BlogCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    where?: BlogLikeWhereInput
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    cursor?: BlogLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Consultas
   */

  export type AggregateConsultas = {
    _count: ConsultasCountAggregateOutputType | null
    _min: ConsultasMinAggregateOutputType | null
    _max: ConsultasMaxAggregateOutputType | null
  }

  export type ConsultasMinAggregateOutputType = {
    id: string | null
    descripcion: string | null
    email: string | null
    numero: string | null
    createdAt: Date | null
    statsMes: string | null
  }

  export type ConsultasMaxAggregateOutputType = {
    id: string | null
    descripcion: string | null
    email: string | null
    numero: string | null
    createdAt: Date | null
    statsMes: string | null
  }

  export type ConsultasCountAggregateOutputType = {
    id: number
    descripcion: number
    email: number
    numero: number
    createdAt: number
    statsMes: number
    _all: number
  }


  export type ConsultasMinAggregateInputType = {
    id?: true
    descripcion?: true
    email?: true
    numero?: true
    createdAt?: true
    statsMes?: true
  }

  export type ConsultasMaxAggregateInputType = {
    id?: true
    descripcion?: true
    email?: true
    numero?: true
    createdAt?: true
    statsMes?: true
  }

  export type ConsultasCountAggregateInputType = {
    id?: true
    descripcion?: true
    email?: true
    numero?: true
    createdAt?: true
    statsMes?: true
    _all?: true
  }

  export type ConsultasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to aggregate.
     */
    where?: ConsultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultasOrderByWithRelationInput | ConsultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultasMaxAggregateInputType
  }

  export type GetConsultasAggregateType<T extends ConsultasAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultas[P]>
      : GetScalarType<T[P], AggregateConsultas[P]>
  }




  export type ConsultasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultasWhereInput
    orderBy?: ConsultasOrderByWithAggregationInput | ConsultasOrderByWithAggregationInput[]
    by: ConsultasScalarFieldEnum[] | ConsultasScalarFieldEnum
    having?: ConsultasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultasCountAggregateInputType | true
    _min?: ConsultasMinAggregateInputType
    _max?: ConsultasMaxAggregateInputType
  }

  export type ConsultasGroupByOutputType = {
    id: string
    descripcion: string
    email: string
    numero: string
    createdAt: Date
    statsMes: string
    _count: ConsultasCountAggregateOutputType | null
    _min: ConsultasMinAggregateOutputType | null
    _max: ConsultasMaxAggregateOutputType | null
  }

  type GetConsultasGroupByPayload<T extends ConsultasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultasGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultasGroupByOutputType[P]>
        }
      >
    >


  export type ConsultasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    email?: boolean
    numero?: boolean
    createdAt?: boolean
    statsMes?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>

  export type ConsultasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    email?: boolean
    numero?: boolean
    createdAt?: boolean
    statsMes?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>

  export type ConsultasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    email?: boolean
    numero?: boolean
    createdAt?: boolean
    statsMes?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>

  export type ConsultasSelectScalar = {
    id?: boolean
    descripcion?: boolean
    email?: boolean
    numero?: boolean
    createdAt?: boolean
    statsMes?: boolean
  }

  export type ConsultasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion" | "email" | "numero" | "createdAt" | "statsMes", ExtArgs["result"]["consultas"]>
  export type ConsultasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }
  export type ConsultasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }
  export type ConsultasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }

  export type $ConsultasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultas"
    objects: {
      stats: Prisma.$StatsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descripcion: string
      email: string
      numero: string
      createdAt: Date
      statsMes: string
    }, ExtArgs["result"]["consultas"]>
    composites: {}
  }

  type ConsultasGetPayload<S extends boolean | null | undefined | ConsultasDefaultArgs> = $Result.GetResult<Prisma.$ConsultasPayload, S>

  type ConsultasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultasCountAggregateInputType | true
    }

  export interface ConsultasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultas'], meta: { name: 'Consultas' } }
    /**
     * Find zero or one Consultas that matches the filter.
     * @param {ConsultasFindUniqueArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultasFindUniqueArgs>(args: SelectSubset<T, ConsultasFindUniqueArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultasFindUniqueOrThrowArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultasFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasFindFirstArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultasFindFirstArgs>(args?: SelectSubset<T, ConsultasFindFirstArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasFindFirstOrThrowArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultasFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consultas.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consultas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultasWithIdOnly = await prisma.consultas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultasFindManyArgs>(args?: SelectSubset<T, ConsultasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultas.
     * @param {ConsultasCreateArgs} args - Arguments to create a Consultas.
     * @example
     * // Create one Consultas
     * const Consultas = await prisma.consultas.create({
     *   data: {
     *     // ... data to create a Consultas
     *   }
     * })
     * 
     */
    create<T extends ConsultasCreateArgs>(args: SelectSubset<T, ConsultasCreateArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultasCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consultas = await prisma.consultas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultasCreateManyArgs>(args?: SelectSubset<T, ConsultasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultasCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consultas = await prisma.consultas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultasWithIdOnly = await prisma.consultas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultasCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultas.
     * @param {ConsultasDeleteArgs} args - Arguments to delete one Consultas.
     * @example
     * // Delete one Consultas
     * const Consultas = await prisma.consultas.delete({
     *   where: {
     *     // ... filter to delete one Consultas
     *   }
     * })
     * 
     */
    delete<T extends ConsultasDeleteArgs>(args: SelectSubset<T, ConsultasDeleteArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultas.
     * @param {ConsultasUpdateArgs} args - Arguments to update one Consultas.
     * @example
     * // Update one Consultas
     * const consultas = await prisma.consultas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultasUpdateArgs>(args: SelectSubset<T, ConsultasUpdateArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultasDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consultas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultasDeleteManyArgs>(args?: SelectSubset<T, ConsultasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consultas = await prisma.consultas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultasUpdateManyArgs>(args: SelectSubset<T, ConsultasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultasUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consultas = await prisma.consultas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultasWithIdOnly = await prisma.consultas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultasUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultas.
     * @param {ConsultasUpsertArgs} args - Arguments to update or create a Consultas.
     * @example
     * // Update or create a Consultas
     * const consultas = await prisma.consultas.upsert({
     *   create: {
     *     // ... data to create a Consultas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultas we want to update
     *   }
     * })
     */
    upsert<T extends ConsultasUpsertArgs>(args: SelectSubset<T, ConsultasUpsertArgs<ExtArgs>>): Prisma__ConsultasClient<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consultas.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultasCountArgs>(
      args?: Subset<T, ConsultasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultasAggregateArgs>(args: Subset<T, ConsultasAggregateArgs>): Prisma.PrismaPromise<GetConsultasAggregateType<T>>

    /**
     * Group by Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultasGroupByArgs['orderBy'] }
        : { orderBy?: ConsultasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultas model
   */
  readonly fields: ConsultasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stats<T extends StatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatsDefaultArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultas model
   */
  interface ConsultasFieldRefs {
    readonly id: FieldRef<"Consultas", 'String'>
    readonly descripcion: FieldRef<"Consultas", 'String'>
    readonly email: FieldRef<"Consultas", 'String'>
    readonly numero: FieldRef<"Consultas", 'String'>
    readonly createdAt: FieldRef<"Consultas", 'DateTime'>
    readonly statsMes: FieldRef<"Consultas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Consultas findUnique
   */
  export type ConsultasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where: ConsultasWhereUniqueInput
  }

  /**
   * Consultas findUniqueOrThrow
   */
  export type ConsultasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where: ConsultasWhereUniqueInput
  }

  /**
   * Consultas findFirst
   */
  export type ConsultasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultasOrderByWithRelationInput | ConsultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * Consultas findFirstOrThrow
   */
  export type ConsultasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultasOrderByWithRelationInput | ConsultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * Consultas findMany
   */
  export type ConsultasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultasOrderByWithRelationInput | ConsultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * Consultas create
   */
  export type ConsultasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultas.
     */
    data: XOR<ConsultasCreateInput, ConsultasUncheckedCreateInput>
  }

  /**
   * Consultas createMany
   */
  export type ConsultasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultasCreateManyInput | ConsultasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultas createManyAndReturn
   */
  export type ConsultasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * The data used to create many Consultas.
     */
    data: ConsultasCreateManyInput | ConsultasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultas update
   */
  export type ConsultasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultas.
     */
    data: XOR<ConsultasUpdateInput, ConsultasUncheckedUpdateInput>
    /**
     * Choose, which Consultas to update.
     */
    where: ConsultasWhereUniqueInput
  }

  /**
   * Consultas updateMany
   */
  export type ConsultasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultasUpdateManyMutationInput, ConsultasUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultasWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consultas updateManyAndReturn
   */
  export type ConsultasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultasUpdateManyMutationInput, ConsultasUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultasWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultas upsert
   */
  export type ConsultasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultas to update in case it exists.
     */
    where: ConsultasWhereUniqueInput
    /**
     * In case the Consultas found by the `where` argument doesn't exist, create a new Consultas with this data.
     */
    create: XOR<ConsultasCreateInput, ConsultasUncheckedCreateInput>
    /**
     * In case the Consultas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultasUpdateInput, ConsultasUncheckedUpdateInput>
  }

  /**
   * Consultas delete
   */
  export type ConsultasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    /**
     * Filter which Consultas to delete.
     */
    where: ConsultasWhereUniqueInput
  }

  /**
   * Consultas deleteMany
   */
  export type ConsultasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultasWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consultas without action
   */
  export type ConsultasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    contenido: string | null
    resumen: string | null
    imagen: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    contenido: string | null
    resumen: string | null
    imagen: string | null
    visible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    titulo: number
    contenido: number
    resumen: number
    imagen: number
    visible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    resumen?: true
    imagen?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    resumen?: true
    imagen?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    resumen?: true
    imagen?: true
    visible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    resumen?: boolean
    imagen?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comentarios?: boolean | Blog$comentariosArgs<ExtArgs>
    likes?: boolean | Blog$likesArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    resumen?: boolean
    imagen?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    resumen?: boolean
    imagen?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    resumen?: boolean
    imagen?: boolean
    visible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "contenido" | "resumen" | "imagen" | "visible" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | Blog$comentariosArgs<ExtArgs>
    likes?: boolean | Blog$likesArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      comentarios: Prisma.$BlogCommentPayload<ExtArgs>[]
      likes: Prisma.$BlogLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      contenido: string
      resumen: string
      imagen: string
      visible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comentarios<T extends Blog$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Blog$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Blog$likesArgs<ExtArgs> = {}>(args?: Subset<T, Blog$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly titulo: FieldRef<"Blog", 'String'>
    readonly contenido: FieldRef<"Blog", 'String'>
    readonly resumen: FieldRef<"Blog", 'String'>
    readonly imagen: FieldRef<"Blog", 'String'>
    readonly visible: FieldRef<"Blog", 'Boolean'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.comentarios
   */
  export type Blog$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    cursor?: BlogCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * Blog.likes
   */
  export type Blog$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    where?: BlogLikeWhereInput
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    cursor?: BlogLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Stats
   */

  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  export type StatsAvgAggregateOutputType = {
    cantidadDeProductos: number | null
    cantidadDeBlogs: number | null
  }

  export type StatsSumAggregateOutputType = {
    cantidadDeProductos: number | null
    cantidadDeBlogs: number | null
  }

  export type StatsMinAggregateOutputType = {
    mes: string | null
    cantidadDeProductos: number | null
    cantidadDeBlogs: number | null
  }

  export type StatsMaxAggregateOutputType = {
    mes: string | null
    cantidadDeProductos: number | null
    cantidadDeBlogs: number | null
  }

  export type StatsCountAggregateOutputType = {
    mes: number
    cantidadDeProductos: number
    cantidadDeBlogs: number
    _all: number
  }


  export type StatsAvgAggregateInputType = {
    cantidadDeProductos?: true
    cantidadDeBlogs?: true
  }

  export type StatsSumAggregateInputType = {
    cantidadDeProductos?: true
    cantidadDeBlogs?: true
  }

  export type StatsMinAggregateInputType = {
    mes?: true
    cantidadDeProductos?: true
    cantidadDeBlogs?: true
  }

  export type StatsMaxAggregateInputType = {
    mes?: true
    cantidadDeProductos?: true
    cantidadDeBlogs?: true
  }

  export type StatsCountAggregateInputType = {
    mes?: true
    cantidadDeProductos?: true
    cantidadDeBlogs?: true
    _all?: true
  }

  export type StatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to aggregate.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsMaxAggregateInputType
  }

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
        [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>
  }




  export type StatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatsWhereInput
    orderBy?: StatsOrderByWithAggregationInput | StatsOrderByWithAggregationInput[]
    by: StatsScalarFieldEnum[] | StatsScalarFieldEnum
    having?: StatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsCountAggregateInputType | true
    _avg?: StatsAvgAggregateInputType
    _sum?: StatsSumAggregateInputType
    _min?: StatsMinAggregateInputType
    _max?: StatsMaxAggregateInputType
  }

  export type StatsGroupByOutputType = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>
        }
      >
    >


  export type StatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mes?: boolean
    cantidadDeProductos?: boolean
    cantidadDeBlogs?: boolean
    userViews?: boolean | Stats$userViewsArgs<ExtArgs>
    cantidadDeConsultas?: boolean | Stats$cantidadDeConsultasArgs<ExtArgs>
    _count?: boolean | StatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mes?: boolean
    cantidadDeProductos?: boolean
    cantidadDeBlogs?: boolean
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mes?: boolean
    cantidadDeProductos?: boolean
    cantidadDeBlogs?: boolean
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectScalar = {
    mes?: boolean
    cantidadDeProductos?: boolean
    cantidadDeBlogs?: boolean
  }

  export type StatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mes" | "cantidadDeProductos" | "cantidadDeBlogs", ExtArgs["result"]["stats"]>
  export type StatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userViews?: boolean | Stats$userViewsArgs<ExtArgs>
    cantidadDeConsultas?: boolean | Stats$cantidadDeConsultasArgs<ExtArgs>
    _count?: boolean | StatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stats"
    objects: {
      userViews: Prisma.$UserViewPayload<ExtArgs>[]
      cantidadDeConsultas: Prisma.$ConsultasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mes: string
      cantidadDeProductos: number
      cantidadDeBlogs: number
    }, ExtArgs["result"]["stats"]>
    composites: {}
  }

  type StatsGetPayload<S extends boolean | null | undefined | StatsDefaultArgs> = $Result.GetResult<Prisma.$StatsPayload, S>

  type StatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatsCountAggregateInputType | true
    }

  export interface StatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stats'], meta: { name: 'Stats' } }
    /**
     * Find zero or one Stats that matches the filter.
     * @param {StatsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatsFindUniqueArgs>(args: SelectSubset<T, StatsFindUniqueArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatsFindUniqueOrThrowArgs>(args: SelectSubset<T, StatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatsFindFirstArgs>(args?: SelectSubset<T, StatsFindFirstArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatsFindFirstOrThrowArgs>(args?: SelectSubset<T, StatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     * 
     * // Only select the `mes`
     * const statsWithMesOnly = await prisma.stats.findMany({ select: { mes: true } })
     * 
     */
    findMany<T extends StatsFindManyArgs>(args?: SelectSubset<T, StatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stats.
     * @param {StatsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     * 
     */
    create<T extends StatsCreateArgs>(args: SelectSubset<T, StatsCreateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stats.
     * @param {StatsCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatsCreateManyArgs>(args?: SelectSubset<T, StatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatsCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `mes`
     * const statsWithMesOnly = await prisma.stats.createManyAndReturn({
     *   select: { mes: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatsCreateManyAndReturnArgs>(args?: SelectSubset<T, StatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stats.
     * @param {StatsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     * 
     */
    delete<T extends StatsDeleteArgs>(args: SelectSubset<T, StatsDeleteArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stats.
     * @param {StatsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatsUpdateArgs>(args: SelectSubset<T, StatsUpdateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stats.
     * @param {StatsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatsDeleteManyArgs>(args?: SelectSubset<T, StatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatsUpdateManyArgs>(args: SelectSubset<T, StatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats and returns the data updated in the database.
     * @param {StatsUpdateManyAndReturnArgs} args - Arguments to update many Stats.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stats and only return the `mes`
     * const statsWithMesOnly = await prisma.stats.updateManyAndReturn({
     *   select: { mes: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatsUpdateManyAndReturnArgs>(args: SelectSubset<T, StatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stats.
     * @param {StatsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
     */
    upsert<T extends StatsUpsertArgs>(args: SelectSubset<T, StatsUpsertArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatsCountArgs>(
      args?: Subset<T, StatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsAggregateArgs>(args: Subset<T, StatsAggregateArgs>): Prisma.PrismaPromise<GetStatsAggregateType<T>>

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsGroupByArgs['orderBy'] }
        : { orderBy?: StatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stats model
   */
  readonly fields: StatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userViews<T extends Stats$userViewsArgs<ExtArgs> = {}>(args?: Subset<T, Stats$userViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cantidadDeConsultas<T extends Stats$cantidadDeConsultasArgs<ExtArgs> = {}>(args?: Subset<T, Stats$cantidadDeConsultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stats model
   */
  interface StatsFieldRefs {
    readonly mes: FieldRef<"Stats", 'String'>
    readonly cantidadDeProductos: FieldRef<"Stats", 'Int'>
    readonly cantidadDeBlogs: FieldRef<"Stats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stats findUnique
   */
  export type StatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findUniqueOrThrow
   */
  export type StatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findFirst
   */
  export type StatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findFirstOrThrow
   */
  export type StatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findMany
   */
  export type StatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats create
   */
  export type StatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stats.
     */
    data: XOR<StatsCreateInput, StatsUncheckedCreateInput>
  }

  /**
   * Stats createMany
   */
  export type StatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stats createManyAndReturn
   */
  export type StatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stats update
   */
  export type StatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stats.
     */
    data: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
    /**
     * Choose, which Stats to update.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats updateMany
   */
  export type StatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stats updateManyAndReturn
   */
  export type StatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stats upsert
   */
  export type StatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stats to update in case it exists.
     */
    where: StatsWhereUniqueInput
    /**
     * In case the Stats found by the `where` argument doesn't exist, create a new Stats with this data.
     */
    create: XOR<StatsCreateInput, StatsUncheckedCreateInput>
    /**
     * In case the Stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
  }

  /**
   * Stats delete
   */
  export type StatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter which Stats to delete.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats deleteMany
   */
  export type StatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to delete.
     */
    limit?: number
  }

  /**
   * Stats.userViews
   */
  export type Stats$userViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    where?: UserViewWhereInput
    orderBy?: UserViewOrderByWithRelationInput | UserViewOrderByWithRelationInput[]
    cursor?: UserViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserViewScalarFieldEnum | UserViewScalarFieldEnum[]
  }

  /**
   * Stats.cantidadDeConsultas
   */
  export type Stats$cantidadDeConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultas
     */
    select?: ConsultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultas
     */
    omit?: ConsultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultasInclude<ExtArgs> | null
    where?: ConsultasWhereInput
    orderBy?: ConsultasOrderByWithRelationInput | ConsultasOrderByWithRelationInput[]
    cursor?: ConsultasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * Stats without action
   */
  export type StatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
  }


  /**
   * Model UserView
   */

  export type AggregateUserView = {
    _count: UserViewCountAggregateOutputType | null
    _min: UserViewMinAggregateOutputType | null
    _max: UserViewMaxAggregateOutputType | null
  }

  export type UserViewMinAggregateOutputType = {
    id: string | null
    ip: string | null
    statsMes: string | null
  }

  export type UserViewMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    statsMes: string | null
  }

  export type UserViewCountAggregateOutputType = {
    id: number
    ip: number
    statsMes: number
    _all: number
  }


  export type UserViewMinAggregateInputType = {
    id?: true
    ip?: true
    statsMes?: true
  }

  export type UserViewMaxAggregateInputType = {
    id?: true
    ip?: true
    statsMes?: true
  }

  export type UserViewCountAggregateInputType = {
    id?: true
    ip?: true
    statsMes?: true
    _all?: true
  }

  export type UserViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserView to aggregate.
     */
    where?: UserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewOrderByWithRelationInput | UserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserViews
    **/
    _count?: true | UserViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserViewMaxAggregateInputType
  }

  export type GetUserViewAggregateType<T extends UserViewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserView[P]>
      : GetScalarType<T[P], AggregateUserView[P]>
  }




  export type UserViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserViewWhereInput
    orderBy?: UserViewOrderByWithAggregationInput | UserViewOrderByWithAggregationInput[]
    by: UserViewScalarFieldEnum[] | UserViewScalarFieldEnum
    having?: UserViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserViewCountAggregateInputType | true
    _min?: UserViewMinAggregateInputType
    _max?: UserViewMaxAggregateInputType
  }

  export type UserViewGroupByOutputType = {
    id: string
    ip: string
    statsMes: string
    _count: UserViewCountAggregateOutputType | null
    _min: UserViewMinAggregateOutputType | null
    _max: UserViewMaxAggregateOutputType | null
  }

  type GetUserViewGroupByPayload<T extends UserViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserViewGroupByOutputType[P]>
            : GetScalarType<T[P], UserViewGroupByOutputType[P]>
        }
      >
    >


  export type UserViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    statsMes?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userView"]>

  export type UserViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    statsMes?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userView"]>

  export type UserViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    statsMes?: boolean
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userView"]>

  export type UserViewSelectScalar = {
    id?: boolean
    ip?: boolean
    statsMes?: boolean
  }

  export type UserViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "statsMes", ExtArgs["result"]["userView"]>
  export type UserViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }
  export type UserViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }
  export type UserViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | StatsDefaultArgs<ExtArgs>
  }

  export type $UserViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserView"
    objects: {
      stats: Prisma.$StatsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      statsMes: string
    }, ExtArgs["result"]["userView"]>
    composites: {}
  }

  type UserViewGetPayload<S extends boolean | null | undefined | UserViewDefaultArgs> = $Result.GetResult<Prisma.$UserViewPayload, S>

  type UserViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserViewCountAggregateInputType | true
    }

  export interface UserViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserView'], meta: { name: 'UserView' } }
    /**
     * Find zero or one UserView that matches the filter.
     * @param {UserViewFindUniqueArgs} args - Arguments to find a UserView
     * @example
     * // Get one UserView
     * const userView = await prisma.userView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserViewFindUniqueArgs>(args: SelectSubset<T, UserViewFindUniqueArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserViewFindUniqueOrThrowArgs} args - Arguments to find a UserView
     * @example
     * // Get one UserView
     * const userView = await prisma.userView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserViewFindUniqueOrThrowArgs>(args: SelectSubset<T, UserViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewFindFirstArgs} args - Arguments to find a UserView
     * @example
     * // Get one UserView
     * const userView = await prisma.userView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserViewFindFirstArgs>(args?: SelectSubset<T, UserViewFindFirstArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewFindFirstOrThrowArgs} args - Arguments to find a UserView
     * @example
     * // Get one UserView
     * const userView = await prisma.userView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserViewFindFirstOrThrowArgs>(args?: SelectSubset<T, UserViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserViews
     * const userViews = await prisma.userView.findMany()
     * 
     * // Get first 10 UserViews
     * const userViews = await prisma.userView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userViewWithIdOnly = await prisma.userView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserViewFindManyArgs>(args?: SelectSubset<T, UserViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserView.
     * @param {UserViewCreateArgs} args - Arguments to create a UserView.
     * @example
     * // Create one UserView
     * const UserView = await prisma.userView.create({
     *   data: {
     *     // ... data to create a UserView
     *   }
     * })
     * 
     */
    create<T extends UserViewCreateArgs>(args: SelectSubset<T, UserViewCreateArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserViews.
     * @param {UserViewCreateManyArgs} args - Arguments to create many UserViews.
     * @example
     * // Create many UserViews
     * const userView = await prisma.userView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserViewCreateManyArgs>(args?: SelectSubset<T, UserViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserViews and returns the data saved in the database.
     * @param {UserViewCreateManyAndReturnArgs} args - Arguments to create many UserViews.
     * @example
     * // Create many UserViews
     * const userView = await prisma.userView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserViews and only return the `id`
     * const userViewWithIdOnly = await prisma.userView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserViewCreateManyAndReturnArgs>(args?: SelectSubset<T, UserViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserView.
     * @param {UserViewDeleteArgs} args - Arguments to delete one UserView.
     * @example
     * // Delete one UserView
     * const UserView = await prisma.userView.delete({
     *   where: {
     *     // ... filter to delete one UserView
     *   }
     * })
     * 
     */
    delete<T extends UserViewDeleteArgs>(args: SelectSubset<T, UserViewDeleteArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserView.
     * @param {UserViewUpdateArgs} args - Arguments to update one UserView.
     * @example
     * // Update one UserView
     * const userView = await prisma.userView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserViewUpdateArgs>(args: SelectSubset<T, UserViewUpdateArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserViews.
     * @param {UserViewDeleteManyArgs} args - Arguments to filter UserViews to delete.
     * @example
     * // Delete a few UserViews
     * const { count } = await prisma.userView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserViewDeleteManyArgs>(args?: SelectSubset<T, UserViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserViews
     * const userView = await prisma.userView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserViewUpdateManyArgs>(args: SelectSubset<T, UserViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserViews and returns the data updated in the database.
     * @param {UserViewUpdateManyAndReturnArgs} args - Arguments to update many UserViews.
     * @example
     * // Update many UserViews
     * const userView = await prisma.userView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserViews and only return the `id`
     * const userViewWithIdOnly = await prisma.userView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserViewUpdateManyAndReturnArgs>(args: SelectSubset<T, UserViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserView.
     * @param {UserViewUpsertArgs} args - Arguments to update or create a UserView.
     * @example
     * // Update or create a UserView
     * const userView = await prisma.userView.upsert({
     *   create: {
     *     // ... data to create a UserView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserView we want to update
     *   }
     * })
     */
    upsert<T extends UserViewUpsertArgs>(args: SelectSubset<T, UserViewUpsertArgs<ExtArgs>>): Prisma__UserViewClient<$Result.GetResult<Prisma.$UserViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewCountArgs} args - Arguments to filter UserViews to count.
     * @example
     * // Count the number of UserViews
     * const count = await prisma.userView.count({
     *   where: {
     *     // ... the filter for the UserViews we want to count
     *   }
     * })
    **/
    count<T extends UserViewCountArgs>(
      args?: Subset<T, UserViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserViewAggregateArgs>(args: Subset<T, UserViewAggregateArgs>): Prisma.PrismaPromise<GetUserViewAggregateType<T>>

    /**
     * Group by UserView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserViewGroupByArgs['orderBy'] }
        : { orderBy?: UserViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserView model
   */
  readonly fields: UserViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stats<T extends StatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatsDefaultArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserView model
   */
  interface UserViewFieldRefs {
    readonly id: FieldRef<"UserView", 'String'>
    readonly ip: FieldRef<"UserView", 'String'>
    readonly statsMes: FieldRef<"UserView", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserView findUnique
   */
  export type UserViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * Filter, which UserView to fetch.
     */
    where: UserViewWhereUniqueInput
  }

  /**
   * UserView findUniqueOrThrow
   */
  export type UserViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * Filter, which UserView to fetch.
     */
    where: UserViewWhereUniqueInput
  }

  /**
   * UserView findFirst
   */
  export type UserViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * Filter, which UserView to fetch.
     */
    where?: UserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewOrderByWithRelationInput | UserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViews.
     */
    cursor?: UserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViews.
     */
    distinct?: UserViewScalarFieldEnum | UserViewScalarFieldEnum[]
  }

  /**
   * UserView findFirstOrThrow
   */
  export type UserViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * Filter, which UserView to fetch.
     */
    where?: UserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewOrderByWithRelationInput | UserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserViews.
     */
    cursor?: UserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserViews.
     */
    distinct?: UserViewScalarFieldEnum | UserViewScalarFieldEnum[]
  }

  /**
   * UserView findMany
   */
  export type UserViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * Filter, which UserViews to fetch.
     */
    where?: UserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserViews to fetch.
     */
    orderBy?: UserViewOrderByWithRelationInput | UserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserViews.
     */
    cursor?: UserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserViews.
     */
    skip?: number
    distinct?: UserViewScalarFieldEnum | UserViewScalarFieldEnum[]
  }

  /**
   * UserView create
   */
  export type UserViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * The data needed to create a UserView.
     */
    data: XOR<UserViewCreateInput, UserViewUncheckedCreateInput>
  }

  /**
   * UserView createMany
   */
  export type UserViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserViews.
     */
    data: UserViewCreateManyInput | UserViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserView createManyAndReturn
   */
  export type UserViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * The data used to create many UserViews.
     */
    data: UserViewCreateManyInput | UserViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserView update
   */
  export type UserViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * The data needed to update a UserView.
     */
    data: XOR<UserViewUpdateInput, UserViewUncheckedUpdateInput>
    /**
     * Choose, which UserView to update.
     */
    where: UserViewWhereUniqueInput
  }

  /**
   * UserView updateMany
   */
  export type UserViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserViews.
     */
    data: XOR<UserViewUpdateManyMutationInput, UserViewUncheckedUpdateManyInput>
    /**
     * Filter which UserViews to update
     */
    where?: UserViewWhereInput
    /**
     * Limit how many UserViews to update.
     */
    limit?: number
  }

  /**
   * UserView updateManyAndReturn
   */
  export type UserViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * The data used to update UserViews.
     */
    data: XOR<UserViewUpdateManyMutationInput, UserViewUncheckedUpdateManyInput>
    /**
     * Filter which UserViews to update
     */
    where?: UserViewWhereInput
    /**
     * Limit how many UserViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserView upsert
   */
  export type UserViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * The filter to search for the UserView to update in case it exists.
     */
    where: UserViewWhereUniqueInput
    /**
     * In case the UserView found by the `where` argument doesn't exist, create a new UserView with this data.
     */
    create: XOR<UserViewCreateInput, UserViewUncheckedCreateInput>
    /**
     * In case the UserView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserViewUpdateInput, UserViewUncheckedUpdateInput>
  }

  /**
   * UserView delete
   */
  export type UserViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
    /**
     * Filter which UserView to delete.
     */
    where: UserViewWhereUniqueInput
  }

  /**
   * UserView deleteMany
   */
  export type UserViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserViews to delete
     */
    where?: UserViewWhereInput
    /**
     * Limit how many UserViews to delete.
     */
    limit?: number
  }

  /**
   * UserView without action
   */
  export type UserViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserView
     */
    select?: UserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserView
     */
    omit?: UserViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserViewInclude<ExtArgs> | null
  }


  /**
   * Model BlogComment
   */

  export type AggregateBlogComment = {
    _count: BlogCommentCountAggregateOutputType | null
    _min: BlogCommentMinAggregateOutputType | null
    _max: BlogCommentMaxAggregateOutputType | null
  }

  export type BlogCommentMinAggregateOutputType = {
    id: string | null
    contenido: string | null
    blogId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCommentMaxAggregateOutputType = {
    id: string | null
    contenido: string | null
    blogId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCommentCountAggregateOutputType = {
    id: number
    contenido: number
    blogId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogCommentMinAggregateInputType = {
    id?: true
    contenido?: true
    blogId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCommentMaxAggregateInputType = {
    id?: true
    contenido?: true
    blogId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCommentCountAggregateInputType = {
    id?: true
    contenido?: true
    blogId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogComment to aggregate.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogComments
    **/
    _count?: true | BlogCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCommentMaxAggregateInputType
  }

  export type GetBlogCommentAggregateType<T extends BlogCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogComment[P]>
      : GetScalarType<T[P], AggregateBlogComment[P]>
  }




  export type BlogCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithAggregationInput | BlogCommentOrderByWithAggregationInput[]
    by: BlogCommentScalarFieldEnum[] | BlogCommentScalarFieldEnum
    having?: BlogCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCommentCountAggregateInputType | true
    _min?: BlogCommentMinAggregateInputType
    _max?: BlogCommentMaxAggregateInputType
  }

  export type BlogCommentGroupByOutputType = {
    id: string
    contenido: string
    blogId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BlogCommentCountAggregateOutputType | null
    _min: BlogCommentMinAggregateOutputType | null
    _max: BlogCommentMaxAggregateOutputType | null
  }

  type GetBlogCommentGroupByPayload<T extends BlogCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCommentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCommentGroupByOutputType[P]>
        }
      >
    >


  export type BlogCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    blogId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    blogId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    blogId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectScalar = {
    id?: boolean
    contenido?: boolean
    blogId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenido" | "blogId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["blogComment"]>
  export type BlogCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogComment"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenido: string
      blogId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogComment"]>
    composites: {}
  }

  type BlogCommentGetPayload<S extends boolean | null | undefined | BlogCommentDefaultArgs> = $Result.GetResult<Prisma.$BlogCommentPayload, S>

  type BlogCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCommentCountAggregateInputType | true
    }

  export interface BlogCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogComment'], meta: { name: 'BlogComment' } }
    /**
     * Find zero or one BlogComment that matches the filter.
     * @param {BlogCommentFindUniqueArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCommentFindUniqueArgs>(args: SelectSubset<T, BlogCommentFindUniqueArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCommentFindUniqueOrThrowArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindFirstArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCommentFindFirstArgs>(args?: SelectSubset<T, BlogCommentFindFirstArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindFirstOrThrowArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogComments
     * const blogComments = await prisma.blogComment.findMany()
     * 
     * // Get first 10 BlogComments
     * const blogComments = await prisma.blogComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCommentFindManyArgs>(args?: SelectSubset<T, BlogCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogComment.
     * @param {BlogCommentCreateArgs} args - Arguments to create a BlogComment.
     * @example
     * // Create one BlogComment
     * const BlogComment = await prisma.blogComment.create({
     *   data: {
     *     // ... data to create a BlogComment
     *   }
     * })
     * 
     */
    create<T extends BlogCommentCreateArgs>(args: SelectSubset<T, BlogCommentCreateArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogComments.
     * @param {BlogCommentCreateManyArgs} args - Arguments to create many BlogComments.
     * @example
     * // Create many BlogComments
     * const blogComment = await prisma.blogComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCommentCreateManyArgs>(args?: SelectSubset<T, BlogCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogComments and returns the data saved in the database.
     * @param {BlogCommentCreateManyAndReturnArgs} args - Arguments to create many BlogComments.
     * @example
     * // Create many BlogComments
     * const blogComment = await prisma.blogComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogComments and only return the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogComment.
     * @param {BlogCommentDeleteArgs} args - Arguments to delete one BlogComment.
     * @example
     * // Delete one BlogComment
     * const BlogComment = await prisma.blogComment.delete({
     *   where: {
     *     // ... filter to delete one BlogComment
     *   }
     * })
     * 
     */
    delete<T extends BlogCommentDeleteArgs>(args: SelectSubset<T, BlogCommentDeleteArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogComment.
     * @param {BlogCommentUpdateArgs} args - Arguments to update one BlogComment.
     * @example
     * // Update one BlogComment
     * const blogComment = await prisma.blogComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCommentUpdateArgs>(args: SelectSubset<T, BlogCommentUpdateArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogComments.
     * @param {BlogCommentDeleteManyArgs} args - Arguments to filter BlogComments to delete.
     * @example
     * // Delete a few BlogComments
     * const { count } = await prisma.blogComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCommentDeleteManyArgs>(args?: SelectSubset<T, BlogCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogComments
     * const blogComment = await prisma.blogComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCommentUpdateManyArgs>(args: SelectSubset<T, BlogCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogComments and returns the data updated in the database.
     * @param {BlogCommentUpdateManyAndReturnArgs} args - Arguments to update many BlogComments.
     * @example
     * // Update many BlogComments
     * const blogComment = await prisma.blogComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogComments and only return the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogComment.
     * @param {BlogCommentUpsertArgs} args - Arguments to update or create a BlogComment.
     * @example
     * // Update or create a BlogComment
     * const blogComment = await prisma.blogComment.upsert({
     *   create: {
     *     // ... data to create a BlogComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogComment we want to update
     *   }
     * })
     */
    upsert<T extends BlogCommentUpsertArgs>(args: SelectSubset<T, BlogCommentUpsertArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentCountArgs} args - Arguments to filter BlogComments to count.
     * @example
     * // Count the number of BlogComments
     * const count = await prisma.blogComment.count({
     *   where: {
     *     // ... the filter for the BlogComments we want to count
     *   }
     * })
    **/
    count<T extends BlogCommentCountArgs>(
      args?: Subset<T, BlogCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCommentAggregateArgs>(args: Subset<T, BlogCommentAggregateArgs>): Prisma.PrismaPromise<GetBlogCommentAggregateType<T>>

    /**
     * Group by BlogComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCommentGroupByArgs['orderBy'] }
        : { orderBy?: BlogCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogComment model
   */
  readonly fields: BlogCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogComment model
   */
  interface BlogCommentFieldRefs {
    readonly id: FieldRef<"BlogComment", 'String'>
    readonly contenido: FieldRef<"BlogComment", 'String'>
    readonly blogId: FieldRef<"BlogComment", 'String'>
    readonly userId: FieldRef<"BlogComment", 'String'>
    readonly createdAt: FieldRef<"BlogComment", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogComment findUnique
   */
  export type BlogCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment findUniqueOrThrow
   */
  export type BlogCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment findFirst
   */
  export type BlogCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogComments.
     */
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment findFirstOrThrow
   */
  export type BlogCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogComments.
     */
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment findMany
   */
  export type BlogCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComments to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment create
   */
  export type BlogCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogComment.
     */
    data: XOR<BlogCommentCreateInput, BlogCommentUncheckedCreateInput>
  }

  /**
   * BlogComment createMany
   */
  export type BlogCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogComments.
     */
    data: BlogCommentCreateManyInput | BlogCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogComment createManyAndReturn
   */
  export type BlogCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * The data used to create many BlogComments.
     */
    data: BlogCommentCreateManyInput | BlogCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogComment update
   */
  export type BlogCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogComment.
     */
    data: XOR<BlogCommentUpdateInput, BlogCommentUncheckedUpdateInput>
    /**
     * Choose, which BlogComment to update.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment updateMany
   */
  export type BlogCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogComments.
     */
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogComments to update
     */
    where?: BlogCommentWhereInput
    /**
     * Limit how many BlogComments to update.
     */
    limit?: number
  }

  /**
   * BlogComment updateManyAndReturn
   */
  export type BlogCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * The data used to update BlogComments.
     */
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogComments to update
     */
    where?: BlogCommentWhereInput
    /**
     * Limit how many BlogComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogComment upsert
   */
  export type BlogCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogComment to update in case it exists.
     */
    where: BlogCommentWhereUniqueInput
    /**
     * In case the BlogComment found by the `where` argument doesn't exist, create a new BlogComment with this data.
     */
    create: XOR<BlogCommentCreateInput, BlogCommentUncheckedCreateInput>
    /**
     * In case the BlogComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCommentUpdateInput, BlogCommentUncheckedUpdateInput>
  }

  /**
   * BlogComment delete
   */
  export type BlogCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter which BlogComment to delete.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment deleteMany
   */
  export type BlogCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogComments to delete
     */
    where?: BlogCommentWhereInput
    /**
     * Limit how many BlogComments to delete.
     */
    limit?: number
  }

  /**
   * BlogComment without action
   */
  export type BlogCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
  }


  /**
   * Model BlogLike
   */

  export type AggregateBlogLike = {
    _count: BlogLikeCountAggregateOutputType | null
    _min: BlogLikeMinAggregateOutputType | null
    _max: BlogLikeMaxAggregateOutputType | null
  }

  export type BlogLikeMinAggregateOutputType = {
    id: string | null
    blogId: string | null
    userId: string | null
  }

  export type BlogLikeMaxAggregateOutputType = {
    id: string | null
    blogId: string | null
    userId: string | null
  }

  export type BlogLikeCountAggregateOutputType = {
    id: number
    blogId: number
    userId: number
    _all: number
  }


  export type BlogLikeMinAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type BlogLikeMaxAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type BlogLikeCountAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    _all?: true
  }

  export type BlogLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogLike to aggregate.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogLikes
    **/
    _count?: true | BlogLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogLikeMaxAggregateInputType
  }

  export type GetBlogLikeAggregateType<T extends BlogLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogLike[P]>
      : GetScalarType<T[P], AggregateBlogLike[P]>
  }




  export type BlogLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogLikeWhereInput
    orderBy?: BlogLikeOrderByWithAggregationInput | BlogLikeOrderByWithAggregationInput[]
    by: BlogLikeScalarFieldEnum[] | BlogLikeScalarFieldEnum
    having?: BlogLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogLikeCountAggregateInputType | true
    _min?: BlogLikeMinAggregateInputType
    _max?: BlogLikeMaxAggregateInputType
  }

  export type BlogLikeGroupByOutputType = {
    id: string
    blogId: string
    userId: string
    _count: BlogLikeCountAggregateOutputType | null
    _min: BlogLikeMinAggregateOutputType | null
    _max: BlogLikeMaxAggregateOutputType | null
  }

  type GetBlogLikeGroupByPayload<T extends BlogLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogLikeGroupByOutputType[P]>
            : GetScalarType<T[P], BlogLikeGroupByOutputType[P]>
        }
      >
    >


  export type BlogLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogLike"]>

  export type BlogLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogLike"]>

  export type BlogLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogLike"]>

  export type BlogLikeSelectScalar = {
    id?: boolean
    blogId?: boolean
    userId?: boolean
  }

  export type BlogLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "userId", ExtArgs["result"]["blogLike"]>
  export type BlogLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogLike"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogId: string
      userId: string
    }, ExtArgs["result"]["blogLike"]>
    composites: {}
  }

  type BlogLikeGetPayload<S extends boolean | null | undefined | BlogLikeDefaultArgs> = $Result.GetResult<Prisma.$BlogLikePayload, S>

  type BlogLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogLikeCountAggregateInputType | true
    }

  export interface BlogLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogLike'], meta: { name: 'BlogLike' } }
    /**
     * Find zero or one BlogLike that matches the filter.
     * @param {BlogLikeFindUniqueArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogLikeFindUniqueArgs>(args: SelectSubset<T, BlogLikeFindUniqueArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogLikeFindUniqueOrThrowArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeFindFirstArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogLikeFindFirstArgs>(args?: SelectSubset<T, BlogLikeFindFirstArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeFindFirstOrThrowArgs} args - Arguments to find a BlogLike
     * @example
     * // Get one BlogLike
     * const blogLike = await prisma.blogLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogLikes
     * const blogLikes = await prisma.blogLike.findMany()
     * 
     * // Get first 10 BlogLikes
     * const blogLikes = await prisma.blogLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogLikeWithIdOnly = await prisma.blogLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogLikeFindManyArgs>(args?: SelectSubset<T, BlogLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogLike.
     * @param {BlogLikeCreateArgs} args - Arguments to create a BlogLike.
     * @example
     * // Create one BlogLike
     * const BlogLike = await prisma.blogLike.create({
     *   data: {
     *     // ... data to create a BlogLike
     *   }
     * })
     * 
     */
    create<T extends BlogLikeCreateArgs>(args: SelectSubset<T, BlogLikeCreateArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogLikes.
     * @param {BlogLikeCreateManyArgs} args - Arguments to create many BlogLikes.
     * @example
     * // Create many BlogLikes
     * const blogLike = await prisma.blogLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogLikeCreateManyArgs>(args?: SelectSubset<T, BlogLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogLikes and returns the data saved in the database.
     * @param {BlogLikeCreateManyAndReturnArgs} args - Arguments to create many BlogLikes.
     * @example
     * // Create many BlogLikes
     * const blogLike = await prisma.blogLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogLikes and only return the `id`
     * const blogLikeWithIdOnly = await prisma.blogLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogLike.
     * @param {BlogLikeDeleteArgs} args - Arguments to delete one BlogLike.
     * @example
     * // Delete one BlogLike
     * const BlogLike = await prisma.blogLike.delete({
     *   where: {
     *     // ... filter to delete one BlogLike
     *   }
     * })
     * 
     */
    delete<T extends BlogLikeDeleteArgs>(args: SelectSubset<T, BlogLikeDeleteArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogLike.
     * @param {BlogLikeUpdateArgs} args - Arguments to update one BlogLike.
     * @example
     * // Update one BlogLike
     * const blogLike = await prisma.blogLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogLikeUpdateArgs>(args: SelectSubset<T, BlogLikeUpdateArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogLikes.
     * @param {BlogLikeDeleteManyArgs} args - Arguments to filter BlogLikes to delete.
     * @example
     * // Delete a few BlogLikes
     * const { count } = await prisma.blogLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogLikeDeleteManyArgs>(args?: SelectSubset<T, BlogLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogLikes
     * const blogLike = await prisma.blogLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogLikeUpdateManyArgs>(args: SelectSubset<T, BlogLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogLikes and returns the data updated in the database.
     * @param {BlogLikeUpdateManyAndReturnArgs} args - Arguments to update many BlogLikes.
     * @example
     * // Update many BlogLikes
     * const blogLike = await prisma.blogLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogLikes and only return the `id`
     * const blogLikeWithIdOnly = await prisma.blogLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogLike.
     * @param {BlogLikeUpsertArgs} args - Arguments to update or create a BlogLike.
     * @example
     * // Update or create a BlogLike
     * const blogLike = await prisma.blogLike.upsert({
     *   create: {
     *     // ... data to create a BlogLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogLike we want to update
     *   }
     * })
     */
    upsert<T extends BlogLikeUpsertArgs>(args: SelectSubset<T, BlogLikeUpsertArgs<ExtArgs>>): Prisma__BlogLikeClient<$Result.GetResult<Prisma.$BlogLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeCountArgs} args - Arguments to filter BlogLikes to count.
     * @example
     * // Count the number of BlogLikes
     * const count = await prisma.blogLike.count({
     *   where: {
     *     // ... the filter for the BlogLikes we want to count
     *   }
     * })
    **/
    count<T extends BlogLikeCountArgs>(
      args?: Subset<T, BlogLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogLikeAggregateArgs>(args: Subset<T, BlogLikeAggregateArgs>): Prisma.PrismaPromise<GetBlogLikeAggregateType<T>>

    /**
     * Group by BlogLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogLikeGroupByArgs['orderBy'] }
        : { orderBy?: BlogLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogLike model
   */
  readonly fields: BlogLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogLike model
   */
  interface BlogLikeFieldRefs {
    readonly id: FieldRef<"BlogLike", 'String'>
    readonly blogId: FieldRef<"BlogLike", 'String'>
    readonly userId: FieldRef<"BlogLike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogLike findUnique
   */
  export type BlogLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike findUniqueOrThrow
   */
  export type BlogLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike findFirst
   */
  export type BlogLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogLikes.
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogLikes.
     */
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogLike findFirstOrThrow
   */
  export type BlogLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLike to fetch.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogLikes.
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogLikes.
     */
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogLike findMany
   */
  export type BlogLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter, which BlogLikes to fetch.
     */
    where?: BlogLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogLikes to fetch.
     */
    orderBy?: BlogLikeOrderByWithRelationInput | BlogLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogLikes.
     */
    cursor?: BlogLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogLikes.
     */
    skip?: number
    distinct?: BlogLikeScalarFieldEnum | BlogLikeScalarFieldEnum[]
  }

  /**
   * BlogLike create
   */
  export type BlogLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogLike.
     */
    data: XOR<BlogLikeCreateInput, BlogLikeUncheckedCreateInput>
  }

  /**
   * BlogLike createMany
   */
  export type BlogLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogLikes.
     */
    data: BlogLikeCreateManyInput | BlogLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogLike createManyAndReturn
   */
  export type BlogLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * The data used to create many BlogLikes.
     */
    data: BlogLikeCreateManyInput | BlogLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogLike update
   */
  export type BlogLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogLike.
     */
    data: XOR<BlogLikeUpdateInput, BlogLikeUncheckedUpdateInput>
    /**
     * Choose, which BlogLike to update.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike updateMany
   */
  export type BlogLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogLikes.
     */
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyInput>
    /**
     * Filter which BlogLikes to update
     */
    where?: BlogLikeWhereInput
    /**
     * Limit how many BlogLikes to update.
     */
    limit?: number
  }

  /**
   * BlogLike updateManyAndReturn
   */
  export type BlogLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * The data used to update BlogLikes.
     */
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyInput>
    /**
     * Filter which BlogLikes to update
     */
    where?: BlogLikeWhereInput
    /**
     * Limit how many BlogLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogLike upsert
   */
  export type BlogLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogLike to update in case it exists.
     */
    where: BlogLikeWhereUniqueInput
    /**
     * In case the BlogLike found by the `where` argument doesn't exist, create a new BlogLike with this data.
     */
    create: XOR<BlogLikeCreateInput, BlogLikeUncheckedCreateInput>
    /**
     * In case the BlogLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogLikeUpdateInput, BlogLikeUncheckedUpdateInput>
  }

  /**
   * BlogLike delete
   */
  export type BlogLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
    /**
     * Filter which BlogLike to delete.
     */
    where: BlogLikeWhereUniqueInput
  }

  /**
   * BlogLike deleteMany
   */
  export type BlogLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogLikes to delete
     */
    where?: BlogLikeWhereInput
    /**
     * Limit how many BlogLikes to delete.
     */
    limit?: number
  }

  /**
   * BlogLike without action
   */
  export type BlogLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogLike
     */
    select?: BlogLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogLike
     */
    omit?: BlogLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogLikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    precioAntes: 'precioAntes',
    precioAhora: 'precioAhora',
    imagenes: 'imagenes',
    video: 'video',
    url_demo: 'url_demo',
    url_full: 'url_full',
    tipoId: 'tipoId',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ModuloScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    subtitulos: 'subtitulos',
    productId: 'productId'
  };

  export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum]


  export const TipoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo'
  };

  export type TipoScalarFieldEnum = (typeof TipoScalarFieldEnum)[keyof typeof TipoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConsultasScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion',
    email: 'email',
    numero: 'numero',
    createdAt: 'createdAt',
    statsMes: 'statsMes'
  };

  export type ConsultasScalarFieldEnum = (typeof ConsultasScalarFieldEnum)[keyof typeof ConsultasScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    contenido: 'contenido',
    resumen: 'resumen',
    imagen: 'imagen',
    visible: 'visible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const StatsScalarFieldEnum: {
    mes: 'mes',
    cantidadDeProductos: 'cantidadDeProductos',
    cantidadDeBlogs: 'cantidadDeBlogs'
  };

  export type StatsScalarFieldEnum = (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum]


  export const UserViewScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    statsMes: 'statsMes'
  };

  export type UserViewScalarFieldEnum = (typeof UserViewScalarFieldEnum)[keyof typeof UserViewScalarFieldEnum]


  export const BlogCommentScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    blogId: 'blogId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogCommentScalarFieldEnum = (typeof BlogCommentScalarFieldEnum)[keyof typeof BlogCommentScalarFieldEnum]


  export const BlogLikeScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    userId: 'userId'
  };

  export type BlogLikeScalarFieldEnum = (typeof BlogLikeScalarFieldEnum)[keyof typeof BlogLikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    titulo?: StringFilter<"Product"> | string
    descripcion?: StringFilter<"Product"> | string
    precioAntes?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imagenes?: StringNullableListFilter<"Product">
    video?: StringFilter<"Product"> | string
    url_demo?: StringNullableFilter<"Product"> | string | null
    url_full?: StringNullableFilter<"Product"> | string | null
    tipoId?: StringFilter<"Product"> | string
    visible?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    modulos?: ModuloListRelationFilter
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precioAntes?: SortOrderInput | SortOrder
    precioAhora?: SortOrder
    imagenes?: SortOrder
    video?: SortOrder
    url_demo?: SortOrderInput | SortOrder
    url_full?: SortOrderInput | SortOrder
    tipoId?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modulos?: ModuloOrderByRelationAggregateInput
    tipo?: TipoOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    titulo?: StringFilter<"Product"> | string
    descripcion?: StringFilter<"Product"> | string
    precioAntes?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imagenes?: StringNullableListFilter<"Product">
    video?: StringFilter<"Product"> | string
    url_demo?: StringNullableFilter<"Product"> | string | null
    url_full?: StringNullableFilter<"Product"> | string | null
    tipoId?: StringFilter<"Product"> | string
    visible?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    modulos?: ModuloListRelationFilter
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precioAntes?: SortOrderInput | SortOrder
    precioAhora?: SortOrder
    imagenes?: SortOrder
    video?: SortOrder
    url_demo?: SortOrderInput | SortOrder
    url_full?: SortOrderInput | SortOrder
    tipoId?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    titulo?: StringWithAggregatesFilter<"Product"> | string
    descripcion?: StringWithAggregatesFilter<"Product"> | string
    precioAntes?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imagenes?: StringNullableListFilter<"Product">
    video?: StringWithAggregatesFilter<"Product"> | string
    url_demo?: StringNullableWithAggregatesFilter<"Product"> | string | null
    url_full?: StringNullableWithAggregatesFilter<"Product"> | string | null
    tipoId?: StringWithAggregatesFilter<"Product"> | string
    visible?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ModuloWhereInput = {
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    id?: StringFilter<"Modulo"> | string
    titulo?: StringFilter<"Modulo"> | string
    subtitulos?: StringNullableListFilter<"Modulo">
    productId?: StringFilter<"Modulo"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ModuloOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulos?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ModuloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    titulo?: StringFilter<"Modulo"> | string
    subtitulos?: StringNullableListFilter<"Modulo">
    productId?: StringFilter<"Modulo"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ModuloOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulos?: SortOrder
    productId?: SortOrder
    _count?: ModuloCountOrderByAggregateInput
    _max?: ModuloMaxOrderByAggregateInput
    _min?: ModuloMinOrderByAggregateInput
  }

  export type ModuloScalarWhereWithAggregatesInput = {
    AND?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    OR?: ModuloScalarWhereWithAggregatesInput[]
    NOT?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Modulo"> | string
    titulo?: StringWithAggregatesFilter<"Modulo"> | string
    subtitulos?: StringNullableListFilter<"Modulo">
    productId?: StringWithAggregatesFilter<"Modulo"> | string
  }

  export type TipoWhereInput = {
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    id?: StringFilter<"Tipo"> | string
    titulo?: StringFilter<"Tipo"> | string
    productos?: ProductListRelationFilter
  }

  export type TipoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    productos?: ProductOrderByRelationAggregateInput
  }

  export type TipoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    titulo?: StringFilter<"Tipo"> | string
    productos?: ProductListRelationFilter
  }, "id">

  export type TipoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    _count?: TipoCountOrderByAggregateInput
    _max?: TipoMaxOrderByAggregateInput
    _min?: TipoMinOrderByAggregateInput
  }

  export type TipoScalarWhereWithAggregatesInput = {
    AND?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    OR?: TipoScalarWhereWithAggregatesInput[]
    NOT?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tipo"> | string
    titulo?: StringWithAggregatesFilter<"Tipo"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    comentarios?: BlogCommentListRelationFilter
    likes?: BlogLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    comentarios?: BlogCommentOrderByRelationAggregateInput
    likes?: BlogLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    comentarios?: BlogCommentListRelationFilter
    likes?: BlogLikeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ConsultasWhereInput = {
    AND?: ConsultasWhereInput | ConsultasWhereInput[]
    OR?: ConsultasWhereInput[]
    NOT?: ConsultasWhereInput | ConsultasWhereInput[]
    id?: StringFilter<"Consultas"> | string
    descripcion?: StringFilter<"Consultas"> | string
    email?: StringFilter<"Consultas"> | string
    numero?: StringFilter<"Consultas"> | string
    createdAt?: DateTimeFilter<"Consultas"> | Date | string
    statsMes?: StringFilter<"Consultas"> | string
    stats?: XOR<StatsScalarRelationFilter, StatsWhereInput>
  }

  export type ConsultasOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    createdAt?: SortOrder
    statsMes?: SortOrder
    stats?: StatsOrderByWithRelationInput
  }

  export type ConsultasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultasWhereInput | ConsultasWhereInput[]
    OR?: ConsultasWhereInput[]
    NOT?: ConsultasWhereInput | ConsultasWhereInput[]
    descripcion?: StringFilter<"Consultas"> | string
    email?: StringFilter<"Consultas"> | string
    numero?: StringFilter<"Consultas"> | string
    createdAt?: DateTimeFilter<"Consultas"> | Date | string
    statsMes?: StringFilter<"Consultas"> | string
    stats?: XOR<StatsScalarRelationFilter, StatsWhereInput>
  }, "id">

  export type ConsultasOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    createdAt?: SortOrder
    statsMes?: SortOrder
    _count?: ConsultasCountOrderByAggregateInput
    _max?: ConsultasMaxOrderByAggregateInput
    _min?: ConsultasMinOrderByAggregateInput
  }

  export type ConsultasScalarWhereWithAggregatesInput = {
    AND?: ConsultasScalarWhereWithAggregatesInput | ConsultasScalarWhereWithAggregatesInput[]
    OR?: ConsultasScalarWhereWithAggregatesInput[]
    NOT?: ConsultasScalarWhereWithAggregatesInput | ConsultasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultas"> | string
    descripcion?: StringWithAggregatesFilter<"Consultas"> | string
    email?: StringWithAggregatesFilter<"Consultas"> | string
    numero?: StringWithAggregatesFilter<"Consultas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Consultas"> | Date | string
    statsMes?: StringWithAggregatesFilter<"Consultas"> | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    titulo?: StringFilter<"Blog"> | string
    contenido?: StringFilter<"Blog"> | string
    resumen?: StringFilter<"Blog"> | string
    imagen?: StringFilter<"Blog"> | string
    visible?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    comentarios?: BlogCommentListRelationFilter
    likes?: BlogLikeListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    resumen?: SortOrder
    imagen?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comentarios?: BlogCommentOrderByRelationAggregateInput
    likes?: BlogLikeOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    titulo?: StringFilter<"Blog"> | string
    contenido?: StringFilter<"Blog"> | string
    resumen?: StringFilter<"Blog"> | string
    imagen?: StringFilter<"Blog"> | string
    visible?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    comentarios?: BlogCommentListRelationFilter
    likes?: BlogLikeListRelationFilter
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    resumen?: SortOrder
    imagen?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    titulo?: StringWithAggregatesFilter<"Blog"> | string
    contenido?: StringWithAggregatesFilter<"Blog"> | string
    resumen?: StringWithAggregatesFilter<"Blog"> | string
    imagen?: StringWithAggregatesFilter<"Blog"> | string
    visible?: BoolWithAggregatesFilter<"Blog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type StatsWhereInput = {
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    mes?: StringFilter<"Stats"> | string
    cantidadDeProductos?: IntFilter<"Stats"> | number
    cantidadDeBlogs?: IntFilter<"Stats"> | number
    userViews?: UserViewListRelationFilter
    cantidadDeConsultas?: ConsultasListRelationFilter
  }

  export type StatsOrderByWithRelationInput = {
    mes?: SortOrder
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
    userViews?: UserViewOrderByRelationAggregateInput
    cantidadDeConsultas?: ConsultasOrderByRelationAggregateInput
  }

  export type StatsWhereUniqueInput = Prisma.AtLeast<{
    mes?: string
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    cantidadDeProductos?: IntFilter<"Stats"> | number
    cantidadDeBlogs?: IntFilter<"Stats"> | number
    userViews?: UserViewListRelationFilter
    cantidadDeConsultas?: ConsultasListRelationFilter
  }, "mes" | "mes">

  export type StatsOrderByWithAggregationInput = {
    mes?: SortOrder
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
    _count?: StatsCountOrderByAggregateInput
    _avg?: StatsAvgOrderByAggregateInput
    _max?: StatsMaxOrderByAggregateInput
    _min?: StatsMinOrderByAggregateInput
    _sum?: StatsSumOrderByAggregateInput
  }

  export type StatsScalarWhereWithAggregatesInput = {
    AND?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    OR?: StatsScalarWhereWithAggregatesInput[]
    NOT?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    mes?: StringWithAggregatesFilter<"Stats"> | string
    cantidadDeProductos?: IntWithAggregatesFilter<"Stats"> | number
    cantidadDeBlogs?: IntWithAggregatesFilter<"Stats"> | number
  }

  export type UserViewWhereInput = {
    AND?: UserViewWhereInput | UserViewWhereInput[]
    OR?: UserViewWhereInput[]
    NOT?: UserViewWhereInput | UserViewWhereInput[]
    id?: StringFilter<"UserView"> | string
    ip?: StringFilter<"UserView"> | string
    statsMes?: StringFilter<"UserView"> | string
    stats?: XOR<StatsScalarRelationFilter, StatsWhereInput>
  }

  export type UserViewOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    statsMes?: SortOrder
    stats?: StatsOrderByWithRelationInput
  }

  export type UserViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserViewWhereInput | UserViewWhereInput[]
    OR?: UserViewWhereInput[]
    NOT?: UserViewWhereInput | UserViewWhereInput[]
    ip?: StringFilter<"UserView"> | string
    statsMes?: StringFilter<"UserView"> | string
    stats?: XOR<StatsScalarRelationFilter, StatsWhereInput>
  }, "id">

  export type UserViewOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    statsMes?: SortOrder
    _count?: UserViewCountOrderByAggregateInput
    _max?: UserViewMaxOrderByAggregateInput
    _min?: UserViewMinOrderByAggregateInput
  }

  export type UserViewScalarWhereWithAggregatesInput = {
    AND?: UserViewScalarWhereWithAggregatesInput | UserViewScalarWhereWithAggregatesInput[]
    OR?: UserViewScalarWhereWithAggregatesInput[]
    NOT?: UserViewScalarWhereWithAggregatesInput | UserViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserView"> | string
    ip?: StringWithAggregatesFilter<"UserView"> | string
    statsMes?: StringWithAggregatesFilter<"UserView"> | string
  }

  export type BlogCommentWhereInput = {
    AND?: BlogCommentWhereInput | BlogCommentWhereInput[]
    OR?: BlogCommentWhereInput[]
    NOT?: BlogCommentWhereInput | BlogCommentWhereInput[]
    id?: StringFilter<"BlogComment"> | string
    contenido?: StringFilter<"BlogComment"> | string
    blogId?: StringFilter<"BlogComment"> | string
    userId?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogCommentOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: BlogOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogCommentWhereInput | BlogCommentWhereInput[]
    OR?: BlogCommentWhereInput[]
    NOT?: BlogCommentWhereInput | BlogCommentWhereInput[]
    contenido?: StringFilter<"BlogComment"> | string
    blogId?: StringFilter<"BlogComment"> | string
    userId?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BlogCommentOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCommentCountOrderByAggregateInput
    _max?: BlogCommentMaxOrderByAggregateInput
    _min?: BlogCommentMinOrderByAggregateInput
  }

  export type BlogCommentScalarWhereWithAggregatesInput = {
    AND?: BlogCommentScalarWhereWithAggregatesInput | BlogCommentScalarWhereWithAggregatesInput[]
    OR?: BlogCommentScalarWhereWithAggregatesInput[]
    NOT?: BlogCommentScalarWhereWithAggregatesInput | BlogCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogComment"> | string
    contenido?: StringWithAggregatesFilter<"BlogComment"> | string
    blogId?: StringWithAggregatesFilter<"BlogComment"> | string
    userId?: StringWithAggregatesFilter<"BlogComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogComment"> | Date | string
  }

  export type BlogLikeWhereInput = {
    AND?: BlogLikeWhereInput | BlogLikeWhereInput[]
    OR?: BlogLikeWhereInput[]
    NOT?: BlogLikeWhereInput | BlogLikeWhereInput[]
    id?: StringFilter<"BlogLike"> | string
    blogId?: StringFilter<"BlogLike"> | string
    userId?: StringFilter<"BlogLike"> | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogLikeOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    blog?: BlogOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blogId_userId?: BlogLikeBlogIdUserIdCompoundUniqueInput
    AND?: BlogLikeWhereInput | BlogLikeWhereInput[]
    OR?: BlogLikeWhereInput[]
    NOT?: BlogLikeWhereInput | BlogLikeWhereInput[]
    blogId?: StringFilter<"BlogLike"> | string
    userId?: StringFilter<"BlogLike"> | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "blogId_userId">

  export type BlogLikeOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    _count?: BlogLikeCountOrderByAggregateInput
    _max?: BlogLikeMaxOrderByAggregateInput
    _min?: BlogLikeMinOrderByAggregateInput
  }

  export type BlogLikeScalarWhereWithAggregatesInput = {
    AND?: BlogLikeScalarWhereWithAggregatesInput | BlogLikeScalarWhereWithAggregatesInput[]
    OR?: BlogLikeScalarWhereWithAggregatesInput[]
    NOT?: BlogLikeScalarWhereWithAggregatesInput | BlogLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogLike"> | string
    blogId?: StringWithAggregatesFilter<"BlogLike"> | string
    userId?: StringWithAggregatesFilter<"BlogLike"> | string
  }

  export type ProductCreateInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloCreateNestedManyWithoutProductInput
    tipo: TipoCreateNestedOneWithoutProductosInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    tipoId: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUpdateManyWithoutProductNestedInput
    tipo?: TipoUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    tipoId?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    tipoId: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    tipoId?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuloCreateInput = {
    id?: string
    titulo: string
    subtitulos?: ModuloCreatesubtitulosInput | string[]
    product: ProductCreateNestedOneWithoutModulosInput
  }

  export type ModuloUncheckedCreateInput = {
    id?: string
    titulo: string
    subtitulos?: ModuloCreatesubtitulosInput | string[]
    productId: string
  }

  export type ModuloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
    product?: ProductUpdateOneRequiredWithoutModulosNestedInput
  }

  export type ModuloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ModuloCreateManyInput = {
    id?: string
    titulo: string
    subtitulos?: ModuloCreatesubtitulosInput | string[]
    productId: string
  }

  export type ModuloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
  }

  export type ModuloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCreateInput = {
    id?: string
    titulo: string
    productos?: ProductCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateInput = {
    id?: string
    titulo: string
    productos?: ProductUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    productos?: ProductUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    productos?: ProductUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoCreateManyInput = {
    id?: string
    titulo: string
  }

  export type TipoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    comentarios?: BlogCommentCreateNestedManyWithoutUserInput
    likes?: BlogLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    comentarios?: BlogCommentUncheckedCreateNestedManyWithoutUserInput
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    comentarios?: BlogCommentUpdateManyWithoutUserNestedInput
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    comentarios?: BlogCommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ConsultasCreateInput = {
    id?: string
    descripcion: string
    email: string
    numero: string
    createdAt?: Date | string
    stats: StatsCreateNestedOneWithoutCantidadDeConsultasInput
  }

  export type ConsultasUncheckedCreateInput = {
    id?: string
    descripcion: string
    email: string
    numero: string
    createdAt?: Date | string
    statsMes: string
  }

  export type ConsultasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatsUpdateOneRequiredWithoutCantidadDeConsultasNestedInput
  }

  export type ConsultasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statsMes?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultasCreateManyInput = {
    id?: string
    descripcion: string
    email: string
    numero: string
    createdAt?: Date | string
    statsMes: string
  }

  export type ConsultasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statsMes?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comentarios?: BlogCommentCreateNestedManyWithoutBlogInput
    likes?: BlogLikeCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comentarios?: BlogCommentUncheckedCreateNestedManyWithoutBlogInput
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: BlogCommentUpdateManyWithoutBlogNestedInput
    likes?: BlogLikeUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: BlogCommentUncheckedUpdateManyWithoutBlogNestedInput
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatsCreateInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    userViews?: UserViewCreateNestedManyWithoutStatsInput
    cantidadDeConsultas?: ConsultasCreateNestedManyWithoutStatsInput
  }

  export type StatsUncheckedCreateInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    userViews?: UserViewUncheckedCreateNestedManyWithoutStatsInput
    cantidadDeConsultas?: ConsultasUncheckedCreateNestedManyWithoutStatsInput
  }

  export type StatsUpdateInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
    userViews?: UserViewUpdateManyWithoutStatsNestedInput
    cantidadDeConsultas?: ConsultasUpdateManyWithoutStatsNestedInput
  }

  export type StatsUncheckedUpdateInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
    userViews?: UserViewUncheckedUpdateManyWithoutStatsNestedInput
    cantidadDeConsultas?: ConsultasUncheckedUpdateManyWithoutStatsNestedInput
  }

  export type StatsCreateManyInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
  }

  export type StatsUpdateManyMutationInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateManyInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
  }

  export type UserViewCreateInput = {
    id?: string
    ip: string
    stats: StatsCreateNestedOneWithoutUserViewsInput
  }

  export type UserViewUncheckedCreateInput = {
    id?: string
    ip: string
    statsMes: string
  }

  export type UserViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    stats?: StatsUpdateOneRequiredWithoutUserViewsNestedInput
  }

  export type UserViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    statsMes?: StringFieldUpdateOperationsInput | string
  }

  export type UserViewCreateManyInput = {
    id?: string
    ip: string
    statsMes: string
  }

  export type UserViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    statsMes?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCommentCreateInput = {
    id?: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutComentariosInput
    user: UserCreateNestedOneWithoutComentariosInput
  }

  export type BlogCommentUncheckedCreateInput = {
    id?: string
    contenido: string
    blogId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutComentariosNestedInput
    user?: UserUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type BlogCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentCreateManyInput = {
    id?: string
    contenido: string
    blogId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogLikeCreateInput = {
    id?: string
    blog: BlogCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type BlogLikeUncheckedCreateInput = {
    id?: string
    blogId: string
    userId: string
  }

  export type BlogLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blog?: BlogUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type BlogLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogLikeCreateManyInput = {
    id?: string
    blogId: string
    userId: string
  }

  export type BlogLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BlogLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ModuloListRelationFilter = {
    every?: ModuloWhereInput
    some?: ModuloWhereInput
    none?: ModuloWhereInput
  }

  export type TipoScalarRelationFilter = {
    is?: TipoWhereInput
    isNot?: TipoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModuloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precioAntes?: SortOrder
    precioAhora?: SortOrder
    imagenes?: SortOrder
    video?: SortOrder
    url_demo?: SortOrder
    url_full?: SortOrder
    tipoId?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    precioAntes?: SortOrder
    precioAhora?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precioAntes?: SortOrder
    precioAhora?: SortOrder
    video?: SortOrder
    url_demo?: SortOrder
    url_full?: SortOrder
    tipoId?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precioAntes?: SortOrder
    precioAhora?: SortOrder
    video?: SortOrder
    url_demo?: SortOrder
    url_full?: SortOrder
    tipoId?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    precioAntes?: SortOrder
    precioAhora?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ModuloCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulos?: SortOrder
    productId?: SortOrder
  }

  export type ModuloMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    productId?: SortOrder
  }

  export type ModuloMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    productId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
  }

  export type TipoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
  }

  export type TipoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BlogCommentListRelationFilter = {
    every?: BlogCommentWhereInput
    some?: BlogCommentWhereInput
    none?: BlogCommentWhereInput
  }

  export type BlogLikeListRelationFilter = {
    every?: BlogLikeWhereInput
    some?: BlogLikeWhereInput
    none?: BlogLikeWhereInput
  }

  export type BlogCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StatsScalarRelationFilter = {
    is?: StatsWhereInput
    isNot?: StatsWhereInput
  }

  export type ConsultasCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    createdAt?: SortOrder
    statsMes?: SortOrder
  }

  export type ConsultasMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    createdAt?: SortOrder
    statsMes?: SortOrder
  }

  export type ConsultasMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    createdAt?: SortOrder
    statsMes?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    resumen?: SortOrder
    imagen?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    resumen?: SortOrder
    imagen?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    resumen?: SortOrder
    imagen?: SortOrder
    visible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserViewListRelationFilter = {
    every?: UserViewWhereInput
    some?: UserViewWhereInput
    none?: UserViewWhereInput
  }

  export type ConsultasListRelationFilter = {
    every?: ConsultasWhereInput
    some?: ConsultasWhereInput
    none?: ConsultasWhereInput
  }

  export type UserViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatsCountOrderByAggregateInput = {
    mes?: SortOrder
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
  }

  export type StatsAvgOrderByAggregateInput = {
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
  }

  export type StatsMaxOrderByAggregateInput = {
    mes?: SortOrder
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
  }

  export type StatsMinOrderByAggregateInput = {
    mes?: SortOrder
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
  }

  export type StatsSumOrderByAggregateInput = {
    cantidadDeProductos?: SortOrder
    cantidadDeBlogs?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserViewCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    statsMes?: SortOrder
  }

  export type UserViewMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    statsMes?: SortOrder
  }

  export type UserViewMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    statsMes?: SortOrder
  }

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogCommentCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogCommentMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogLikeBlogIdUserIdCompoundUniqueInput = {
    blogId: string
    userId: string
  }

  export type BlogLikeCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type BlogLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type BlogLikeMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type ProductCreateimagenesInput = {
    set: string[]
  }

  export type ModuloCreateNestedManyWithoutProductInput = {
    create?: XOR<ModuloCreateWithoutProductInput, ModuloUncheckedCreateWithoutProductInput> | ModuloCreateWithoutProductInput[] | ModuloUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutProductInput | ModuloCreateOrConnectWithoutProductInput[]
    createMany?: ModuloCreateManyProductInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type TipoCreateNestedOneWithoutProductosInput = {
    create?: XOR<TipoCreateWithoutProductosInput, TipoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutProductosInput
    connect?: TipoWhereUniqueInput
  }

  export type ModuloUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ModuloCreateWithoutProductInput, ModuloUncheckedCreateWithoutProductInput> | ModuloCreateWithoutProductInput[] | ModuloUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutProductInput | ModuloCreateOrConnectWithoutProductInput[]
    createMany?: ModuloCreateManyProductInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductUpdateimagenesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModuloUpdateManyWithoutProductNestedInput = {
    create?: XOR<ModuloCreateWithoutProductInput, ModuloUncheckedCreateWithoutProductInput> | ModuloCreateWithoutProductInput[] | ModuloUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutProductInput | ModuloCreateOrConnectWithoutProductInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutProductInput | ModuloUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ModuloCreateManyProductInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutProductInput | ModuloUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutProductInput | ModuloUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type TipoUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<TipoCreateWithoutProductosInput, TipoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutProductosInput
    upsert?: TipoUpsertWithoutProductosInput
    connect?: TipoWhereUniqueInput
    update?: XOR<XOR<TipoUpdateToOneWithWhereWithoutProductosInput, TipoUpdateWithoutProductosInput>, TipoUncheckedUpdateWithoutProductosInput>
  }

  export type ModuloUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ModuloCreateWithoutProductInput, ModuloUncheckedCreateWithoutProductInput> | ModuloCreateWithoutProductInput[] | ModuloUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutProductInput | ModuloCreateOrConnectWithoutProductInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutProductInput | ModuloUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ModuloCreateManyProductInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutProductInput | ModuloUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutProductInput | ModuloUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type ModuloCreatesubtitulosInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutModulosInput = {
    create?: XOR<ProductCreateWithoutModulosInput, ProductUncheckedCreateWithoutModulosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutModulosInput
    connect?: ProductWhereUniqueInput
  }

  export type ModuloUpdatesubtitulosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateOneRequiredWithoutModulosNestedInput = {
    create?: XOR<ProductCreateWithoutModulosInput, ProductUncheckedCreateWithoutModulosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutModulosInput
    upsert?: ProductUpsertWithoutModulosInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutModulosInput, ProductUpdateWithoutModulosInput>, ProductUncheckedUpdateWithoutModulosInput>
  }

  export type ProductCreateNestedManyWithoutTipoInput = {
    create?: XOR<ProductCreateWithoutTipoInput, ProductUncheckedCreateWithoutTipoInput> | ProductCreateWithoutTipoInput[] | ProductUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTipoInput | ProductCreateOrConnectWithoutTipoInput[]
    createMany?: ProductCreateManyTipoInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<ProductCreateWithoutTipoInput, ProductUncheckedCreateWithoutTipoInput> | ProductCreateWithoutTipoInput[] | ProductUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTipoInput | ProductCreateOrConnectWithoutTipoInput[]
    createMany?: ProductCreateManyTipoInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutTipoNestedInput = {
    create?: XOR<ProductCreateWithoutTipoInput, ProductUncheckedCreateWithoutTipoInput> | ProductCreateWithoutTipoInput[] | ProductUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTipoInput | ProductCreateOrConnectWithoutTipoInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTipoInput | ProductUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: ProductCreateManyTipoInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTipoInput | ProductUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTipoInput | ProductUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<ProductCreateWithoutTipoInput, ProductUncheckedCreateWithoutTipoInput> | ProductCreateWithoutTipoInput[] | ProductUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTipoInput | ProductCreateOrConnectWithoutTipoInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTipoInput | ProductUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: ProductCreateManyTipoInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTipoInput | ProductUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTipoInput | ProductUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BlogCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type BlogCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BlogCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutUserInput | BlogCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutUserInput | BlogCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutUserInput | BlogCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutUserInput | BlogLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutUserInput | BlogLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutUserInput | BlogLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type BlogCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutUserInput | BlogCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutUserInput | BlogCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutUserInput | BlogCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput> | BlogLikeCreateWithoutUserInput[] | BlogLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutUserInput | BlogLikeCreateOrConnectWithoutUserInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutUserInput | BlogLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogLikeCreateManyUserInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutUserInput | BlogLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutUserInput | BlogLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type StatsCreateNestedOneWithoutCantidadDeConsultasInput = {
    create?: XOR<StatsCreateWithoutCantidadDeConsultasInput, StatsUncheckedCreateWithoutCantidadDeConsultasInput>
    connectOrCreate?: StatsCreateOrConnectWithoutCantidadDeConsultasInput
    connect?: StatsWhereUniqueInput
  }

  export type StatsUpdateOneRequiredWithoutCantidadDeConsultasNestedInput = {
    create?: XOR<StatsCreateWithoutCantidadDeConsultasInput, StatsUncheckedCreateWithoutCantidadDeConsultasInput>
    connectOrCreate?: StatsCreateOrConnectWithoutCantidadDeConsultasInput
    upsert?: StatsUpsertWithoutCantidadDeConsultasInput
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutCantidadDeConsultasInput, StatsUpdateWithoutCantidadDeConsultasInput>, StatsUncheckedUpdateWithoutCantidadDeConsultasInput>
  }

  export type BlogCommentCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogCommentCreateWithoutBlogInput, BlogCommentUncheckedCreateWithoutBlogInput> | BlogCommentCreateWithoutBlogInput[] | BlogCommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogInput | BlogCommentCreateOrConnectWithoutBlogInput[]
    createMany?: BlogCommentCreateManyBlogInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogLikeCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogLikeCreateWithoutBlogInput, BlogLikeUncheckedCreateWithoutBlogInput> | BlogLikeCreateWithoutBlogInput[] | BlogLikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogInput | BlogLikeCreateOrConnectWithoutBlogInput[]
    createMany?: BlogLikeCreateManyBlogInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type BlogCommentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogCommentCreateWithoutBlogInput, BlogCommentUncheckedCreateWithoutBlogInput> | BlogCommentCreateWithoutBlogInput[] | BlogCommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogInput | BlogCommentCreateOrConnectWithoutBlogInput[]
    createMany?: BlogCommentCreateManyBlogInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogLikeUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogLikeCreateWithoutBlogInput, BlogLikeUncheckedCreateWithoutBlogInput> | BlogLikeCreateWithoutBlogInput[] | BlogLikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogInput | BlogLikeCreateOrConnectWithoutBlogInput[]
    createMany?: BlogLikeCreateManyBlogInputEnvelope
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
  }

  export type BlogCommentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogCommentCreateWithoutBlogInput, BlogCommentUncheckedCreateWithoutBlogInput> | BlogCommentCreateWithoutBlogInput[] | BlogCommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogInput | BlogCommentCreateOrConnectWithoutBlogInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutBlogInput | BlogCommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogCommentCreateManyBlogInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutBlogInput | BlogCommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutBlogInput | BlogCommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogLikeUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogLikeCreateWithoutBlogInput, BlogLikeUncheckedCreateWithoutBlogInput> | BlogLikeCreateWithoutBlogInput[] | BlogLikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogInput | BlogLikeCreateOrConnectWithoutBlogInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutBlogInput | BlogLikeUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogLikeCreateManyBlogInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutBlogInput | BlogLikeUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutBlogInput | BlogLikeUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type BlogCommentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogCommentCreateWithoutBlogInput, BlogCommentUncheckedCreateWithoutBlogInput> | BlogCommentCreateWithoutBlogInput[] | BlogCommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutBlogInput | BlogCommentCreateOrConnectWithoutBlogInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutBlogInput | BlogCommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogCommentCreateManyBlogInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutBlogInput | BlogCommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutBlogInput | BlogCommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogLikeUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogLikeCreateWithoutBlogInput, BlogLikeUncheckedCreateWithoutBlogInput> | BlogLikeCreateWithoutBlogInput[] | BlogLikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogLikeCreateOrConnectWithoutBlogInput | BlogLikeCreateOrConnectWithoutBlogInput[]
    upsert?: BlogLikeUpsertWithWhereUniqueWithoutBlogInput | BlogLikeUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogLikeCreateManyBlogInputEnvelope
    set?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    disconnect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    delete?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    connect?: BlogLikeWhereUniqueInput | BlogLikeWhereUniqueInput[]
    update?: BlogLikeUpdateWithWhereUniqueWithoutBlogInput | BlogLikeUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogLikeUpdateManyWithWhereWithoutBlogInput | BlogLikeUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
  }

  export type UserViewCreateNestedManyWithoutStatsInput = {
    create?: XOR<UserViewCreateWithoutStatsInput, UserViewUncheckedCreateWithoutStatsInput> | UserViewCreateWithoutStatsInput[] | UserViewUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: UserViewCreateOrConnectWithoutStatsInput | UserViewCreateOrConnectWithoutStatsInput[]
    createMany?: UserViewCreateManyStatsInputEnvelope
    connect?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
  }

  export type ConsultasCreateNestedManyWithoutStatsInput = {
    create?: XOR<ConsultasCreateWithoutStatsInput, ConsultasUncheckedCreateWithoutStatsInput> | ConsultasCreateWithoutStatsInput[] | ConsultasUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: ConsultasCreateOrConnectWithoutStatsInput | ConsultasCreateOrConnectWithoutStatsInput[]
    createMany?: ConsultasCreateManyStatsInputEnvelope
    connect?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
  }

  export type UserViewUncheckedCreateNestedManyWithoutStatsInput = {
    create?: XOR<UserViewCreateWithoutStatsInput, UserViewUncheckedCreateWithoutStatsInput> | UserViewCreateWithoutStatsInput[] | UserViewUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: UserViewCreateOrConnectWithoutStatsInput | UserViewCreateOrConnectWithoutStatsInput[]
    createMany?: UserViewCreateManyStatsInputEnvelope
    connect?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
  }

  export type ConsultasUncheckedCreateNestedManyWithoutStatsInput = {
    create?: XOR<ConsultasCreateWithoutStatsInput, ConsultasUncheckedCreateWithoutStatsInput> | ConsultasCreateWithoutStatsInput[] | ConsultasUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: ConsultasCreateOrConnectWithoutStatsInput | ConsultasCreateOrConnectWithoutStatsInput[]
    createMany?: ConsultasCreateManyStatsInputEnvelope
    connect?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserViewUpdateManyWithoutStatsNestedInput = {
    create?: XOR<UserViewCreateWithoutStatsInput, UserViewUncheckedCreateWithoutStatsInput> | UserViewCreateWithoutStatsInput[] | UserViewUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: UserViewCreateOrConnectWithoutStatsInput | UserViewCreateOrConnectWithoutStatsInput[]
    upsert?: UserViewUpsertWithWhereUniqueWithoutStatsInput | UserViewUpsertWithWhereUniqueWithoutStatsInput[]
    createMany?: UserViewCreateManyStatsInputEnvelope
    set?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    disconnect?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    delete?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    connect?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    update?: UserViewUpdateWithWhereUniqueWithoutStatsInput | UserViewUpdateWithWhereUniqueWithoutStatsInput[]
    updateMany?: UserViewUpdateManyWithWhereWithoutStatsInput | UserViewUpdateManyWithWhereWithoutStatsInput[]
    deleteMany?: UserViewScalarWhereInput | UserViewScalarWhereInput[]
  }

  export type ConsultasUpdateManyWithoutStatsNestedInput = {
    create?: XOR<ConsultasCreateWithoutStatsInput, ConsultasUncheckedCreateWithoutStatsInput> | ConsultasCreateWithoutStatsInput[] | ConsultasUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: ConsultasCreateOrConnectWithoutStatsInput | ConsultasCreateOrConnectWithoutStatsInput[]
    upsert?: ConsultasUpsertWithWhereUniqueWithoutStatsInput | ConsultasUpsertWithWhereUniqueWithoutStatsInput[]
    createMany?: ConsultasCreateManyStatsInputEnvelope
    set?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    disconnect?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    delete?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    connect?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    update?: ConsultasUpdateWithWhereUniqueWithoutStatsInput | ConsultasUpdateWithWhereUniqueWithoutStatsInput[]
    updateMany?: ConsultasUpdateManyWithWhereWithoutStatsInput | ConsultasUpdateManyWithWhereWithoutStatsInput[]
    deleteMany?: ConsultasScalarWhereInput | ConsultasScalarWhereInput[]
  }

  export type UserViewUncheckedUpdateManyWithoutStatsNestedInput = {
    create?: XOR<UserViewCreateWithoutStatsInput, UserViewUncheckedCreateWithoutStatsInput> | UserViewCreateWithoutStatsInput[] | UserViewUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: UserViewCreateOrConnectWithoutStatsInput | UserViewCreateOrConnectWithoutStatsInput[]
    upsert?: UserViewUpsertWithWhereUniqueWithoutStatsInput | UserViewUpsertWithWhereUniqueWithoutStatsInput[]
    createMany?: UserViewCreateManyStatsInputEnvelope
    set?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    disconnect?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    delete?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    connect?: UserViewWhereUniqueInput | UserViewWhereUniqueInput[]
    update?: UserViewUpdateWithWhereUniqueWithoutStatsInput | UserViewUpdateWithWhereUniqueWithoutStatsInput[]
    updateMany?: UserViewUpdateManyWithWhereWithoutStatsInput | UserViewUpdateManyWithWhereWithoutStatsInput[]
    deleteMany?: UserViewScalarWhereInput | UserViewScalarWhereInput[]
  }

  export type ConsultasUncheckedUpdateManyWithoutStatsNestedInput = {
    create?: XOR<ConsultasCreateWithoutStatsInput, ConsultasUncheckedCreateWithoutStatsInput> | ConsultasCreateWithoutStatsInput[] | ConsultasUncheckedCreateWithoutStatsInput[]
    connectOrCreate?: ConsultasCreateOrConnectWithoutStatsInput | ConsultasCreateOrConnectWithoutStatsInput[]
    upsert?: ConsultasUpsertWithWhereUniqueWithoutStatsInput | ConsultasUpsertWithWhereUniqueWithoutStatsInput[]
    createMany?: ConsultasCreateManyStatsInputEnvelope
    set?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    disconnect?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    delete?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    connect?: ConsultasWhereUniqueInput | ConsultasWhereUniqueInput[]
    update?: ConsultasUpdateWithWhereUniqueWithoutStatsInput | ConsultasUpdateWithWhereUniqueWithoutStatsInput[]
    updateMany?: ConsultasUpdateManyWithWhereWithoutStatsInput | ConsultasUpdateManyWithWhereWithoutStatsInput[]
    deleteMany?: ConsultasScalarWhereInput | ConsultasScalarWhereInput[]
  }

  export type StatsCreateNestedOneWithoutUserViewsInput = {
    create?: XOR<StatsCreateWithoutUserViewsInput, StatsUncheckedCreateWithoutUserViewsInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserViewsInput
    connect?: StatsWhereUniqueInput
  }

  export type StatsUpdateOneRequiredWithoutUserViewsNestedInput = {
    create?: XOR<StatsCreateWithoutUserViewsInput, StatsUncheckedCreateWithoutUserViewsInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserViewsInput
    upsert?: StatsUpsertWithoutUserViewsInput
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutUserViewsInput, StatsUpdateWithoutUserViewsInput>, StatsUncheckedUpdateWithoutUserViewsInput>
  }

  export type BlogCreateNestedOneWithoutComentariosInput = {
    create?: XOR<BlogCreateWithoutComentariosInput, BlogUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: BlogCreateOrConnectWithoutComentariosInput
    connect?: BlogWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutComentariosInput
    connect?: UserWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<BlogCreateWithoutComentariosInput, BlogUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: BlogCreateOrConnectWithoutComentariosInput
    upsert?: BlogUpsertWithoutComentariosInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutComentariosInput, BlogUpdateWithoutComentariosInput>, BlogUncheckedUpdateWithoutComentariosInput>
  }

  export type UserUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutComentariosInput
    upsert?: UserUpsertWithoutComentariosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComentariosInput, UserUpdateWithoutComentariosInput>, UserUncheckedUpdateWithoutComentariosInput>
  }

  export type BlogCreateNestedOneWithoutLikesInput = {
    create?: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogCreateOrConnectWithoutLikesInput
    connect?: BlogWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogCreateOrConnectWithoutLikesInput
    upsert?: BlogUpsertWithoutLikesInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutLikesInput, BlogUpdateWithoutLikesInput>, BlogUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ModuloCreateWithoutProductInput = {
    id?: string
    titulo: string
    subtitulos?: ModuloCreatesubtitulosInput | string[]
  }

  export type ModuloUncheckedCreateWithoutProductInput = {
    id?: string
    titulo: string
    subtitulos?: ModuloCreatesubtitulosInput | string[]
  }

  export type ModuloCreateOrConnectWithoutProductInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutProductInput, ModuloUncheckedCreateWithoutProductInput>
  }

  export type ModuloCreateManyProductInputEnvelope = {
    data: ModuloCreateManyProductInput | ModuloCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TipoCreateWithoutProductosInput = {
    id?: string
    titulo: string
  }

  export type TipoUncheckedCreateWithoutProductosInput = {
    id?: string
    titulo: string
  }

  export type TipoCreateOrConnectWithoutProductosInput = {
    where: TipoWhereUniqueInput
    create: XOR<TipoCreateWithoutProductosInput, TipoUncheckedCreateWithoutProductosInput>
  }

  export type ModuloUpsertWithWhereUniqueWithoutProductInput = {
    where: ModuloWhereUniqueInput
    update: XOR<ModuloUpdateWithoutProductInput, ModuloUncheckedUpdateWithoutProductInput>
    create: XOR<ModuloCreateWithoutProductInput, ModuloUncheckedCreateWithoutProductInput>
  }

  export type ModuloUpdateWithWhereUniqueWithoutProductInput = {
    where: ModuloWhereUniqueInput
    data: XOR<ModuloUpdateWithoutProductInput, ModuloUncheckedUpdateWithoutProductInput>
  }

  export type ModuloUpdateManyWithWhereWithoutProductInput = {
    where: ModuloScalarWhereInput
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyWithoutProductInput>
  }

  export type ModuloScalarWhereInput = {
    AND?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    OR?: ModuloScalarWhereInput[]
    NOT?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    id?: StringFilter<"Modulo"> | string
    titulo?: StringFilter<"Modulo"> | string
    subtitulos?: StringNullableListFilter<"Modulo">
    productId?: StringFilter<"Modulo"> | string
  }

  export type TipoUpsertWithoutProductosInput = {
    update: XOR<TipoUpdateWithoutProductosInput, TipoUncheckedUpdateWithoutProductosInput>
    create: XOR<TipoCreateWithoutProductosInput, TipoUncheckedCreateWithoutProductosInput>
    where?: TipoWhereInput
  }

  export type TipoUpdateToOneWithWhereWithoutProductosInput = {
    where?: TipoWhereInput
    data: XOR<TipoUpdateWithoutProductosInput, TipoUncheckedUpdateWithoutProductosInput>
  }

  export type TipoUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutModulosInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoCreateNestedOneWithoutProductosInput
  }

  export type ProductUncheckedCreateWithoutModulosInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    tipoId: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutModulosInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutModulosInput, ProductUncheckedCreateWithoutModulosInput>
  }

  export type ProductUpsertWithoutModulosInput = {
    update: XOR<ProductUpdateWithoutModulosInput, ProductUncheckedUpdateWithoutModulosInput>
    create: XOR<ProductCreateWithoutModulosInput, ProductUncheckedCreateWithoutModulosInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutModulosInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutModulosInput, ProductUncheckedUpdateWithoutModulosInput>
  }

  export type ProductUpdateWithoutModulosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductUncheckedUpdateWithoutModulosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    tipoId?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutTipoInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTipoInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTipoInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTipoInput, ProductUncheckedCreateWithoutTipoInput>
  }

  export type ProductCreateManyTipoInputEnvelope = {
    data: ProductCreateManyTipoInput | ProductCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutTipoInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTipoInput, ProductUncheckedUpdateWithoutTipoInput>
    create: XOR<ProductCreateWithoutTipoInput, ProductUncheckedCreateWithoutTipoInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTipoInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTipoInput, ProductUncheckedUpdateWithoutTipoInput>
  }

  export type ProductUpdateManyWithWhereWithoutTipoInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTipoInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    titulo?: StringFilter<"Product"> | string
    descripcion?: StringFilter<"Product"> | string
    precioAntes?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imagenes?: StringNullableListFilter<"Product">
    video?: StringFilter<"Product"> | string
    url_demo?: StringNullableFilter<"Product"> | string | null
    url_full?: StringNullableFilter<"Product"> | string | null
    tipoId?: StringFilter<"Product"> | string
    visible?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type BlogCommentCreateWithoutUserInput = {
    id?: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutComentariosInput
  }

  export type BlogCommentUncheckedCreateWithoutUserInput = {
    id?: string
    contenido: string
    blogId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCommentCreateOrConnectWithoutUserInput = {
    where: BlogCommentWhereUniqueInput
    create: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput>
  }

  export type BlogCommentCreateManyUserInputEnvelope = {
    data: BlogCommentCreateManyUserInput | BlogCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogLikeCreateWithoutUserInput = {
    id?: string
    blog: BlogCreateNestedOneWithoutLikesInput
  }

  export type BlogLikeUncheckedCreateWithoutUserInput = {
    id?: string
    blogId: string
  }

  export type BlogLikeCreateOrConnectWithoutUserInput = {
    where: BlogLikeWhereUniqueInput
    create: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput>
  }

  export type BlogLikeCreateManyUserInputEnvelope = {
    data: BlogLikeCreateManyUserInput | BlogLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogCommentWhereUniqueInput
    update: XOR<BlogCommentUpdateWithoutUserInput, BlogCommentUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput>
  }

  export type BlogCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogCommentWhereUniqueInput
    data: XOR<BlogCommentUpdateWithoutUserInput, BlogCommentUncheckedUpdateWithoutUserInput>
  }

  export type BlogCommentUpdateManyWithWhereWithoutUserInput = {
    where: BlogCommentScalarWhereInput
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogCommentScalarWhereInput = {
    AND?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
    OR?: BlogCommentScalarWhereInput[]
    NOT?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
    id?: StringFilter<"BlogComment"> | string
    contenido?: StringFilter<"BlogComment"> | string
    blogId?: StringFilter<"BlogComment"> | string
    userId?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
  }

  export type BlogLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogLikeWhereUniqueInput
    update: XOR<BlogLikeUpdateWithoutUserInput, BlogLikeUncheckedUpdateWithoutUserInput>
    create: XOR<BlogLikeCreateWithoutUserInput, BlogLikeUncheckedCreateWithoutUserInput>
  }

  export type BlogLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogLikeWhereUniqueInput
    data: XOR<BlogLikeUpdateWithoutUserInput, BlogLikeUncheckedUpdateWithoutUserInput>
  }

  export type BlogLikeUpdateManyWithWhereWithoutUserInput = {
    where: BlogLikeScalarWhereInput
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogLikeScalarWhereInput = {
    AND?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
    OR?: BlogLikeScalarWhereInput[]
    NOT?: BlogLikeScalarWhereInput | BlogLikeScalarWhereInput[]
    id?: StringFilter<"BlogLike"> | string
    blogId?: StringFilter<"BlogLike"> | string
    userId?: StringFilter<"BlogLike"> | string
  }

  export type StatsCreateWithoutCantidadDeConsultasInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    userViews?: UserViewCreateNestedManyWithoutStatsInput
  }

  export type StatsUncheckedCreateWithoutCantidadDeConsultasInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    userViews?: UserViewUncheckedCreateNestedManyWithoutStatsInput
  }

  export type StatsCreateOrConnectWithoutCantidadDeConsultasInput = {
    where: StatsWhereUniqueInput
    create: XOR<StatsCreateWithoutCantidadDeConsultasInput, StatsUncheckedCreateWithoutCantidadDeConsultasInput>
  }

  export type StatsUpsertWithoutCantidadDeConsultasInput = {
    update: XOR<StatsUpdateWithoutCantidadDeConsultasInput, StatsUncheckedUpdateWithoutCantidadDeConsultasInput>
    create: XOR<StatsCreateWithoutCantidadDeConsultasInput, StatsUncheckedCreateWithoutCantidadDeConsultasInput>
    where?: StatsWhereInput
  }

  export type StatsUpdateToOneWithWhereWithoutCantidadDeConsultasInput = {
    where?: StatsWhereInput
    data: XOR<StatsUpdateWithoutCantidadDeConsultasInput, StatsUncheckedUpdateWithoutCantidadDeConsultasInput>
  }

  export type StatsUpdateWithoutCantidadDeConsultasInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
    userViews?: UserViewUpdateManyWithoutStatsNestedInput
  }

  export type StatsUncheckedUpdateWithoutCantidadDeConsultasInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
    userViews?: UserViewUncheckedUpdateManyWithoutStatsNestedInput
  }

  export type BlogCommentCreateWithoutBlogInput = {
    id?: string
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutComentariosInput
  }

  export type BlogCommentUncheckedCreateWithoutBlogInput = {
    id?: string
    contenido: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCommentCreateOrConnectWithoutBlogInput = {
    where: BlogCommentWhereUniqueInput
    create: XOR<BlogCommentCreateWithoutBlogInput, BlogCommentUncheckedCreateWithoutBlogInput>
  }

  export type BlogCommentCreateManyBlogInputEnvelope = {
    data: BlogCommentCreateManyBlogInput | BlogCommentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type BlogLikeCreateWithoutBlogInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type BlogLikeUncheckedCreateWithoutBlogInput = {
    id?: string
    userId: string
  }

  export type BlogLikeCreateOrConnectWithoutBlogInput = {
    where: BlogLikeWhereUniqueInput
    create: XOR<BlogLikeCreateWithoutBlogInput, BlogLikeUncheckedCreateWithoutBlogInput>
  }

  export type BlogLikeCreateManyBlogInputEnvelope = {
    data: BlogLikeCreateManyBlogInput | BlogLikeCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type BlogCommentUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogCommentWhereUniqueInput
    update: XOR<BlogCommentUpdateWithoutBlogInput, BlogCommentUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogCommentCreateWithoutBlogInput, BlogCommentUncheckedCreateWithoutBlogInput>
  }

  export type BlogCommentUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogCommentWhereUniqueInput
    data: XOR<BlogCommentUpdateWithoutBlogInput, BlogCommentUncheckedUpdateWithoutBlogInput>
  }

  export type BlogCommentUpdateManyWithWhereWithoutBlogInput = {
    where: BlogCommentScalarWhereInput
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyWithoutBlogInput>
  }

  export type BlogLikeUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogLikeWhereUniqueInput
    update: XOR<BlogLikeUpdateWithoutBlogInput, BlogLikeUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogLikeCreateWithoutBlogInput, BlogLikeUncheckedCreateWithoutBlogInput>
  }

  export type BlogLikeUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogLikeWhereUniqueInput
    data: XOR<BlogLikeUpdateWithoutBlogInput, BlogLikeUncheckedUpdateWithoutBlogInput>
  }

  export type BlogLikeUpdateManyWithWhereWithoutBlogInput = {
    where: BlogLikeScalarWhereInput
    data: XOR<BlogLikeUpdateManyMutationInput, BlogLikeUncheckedUpdateManyWithoutBlogInput>
  }

  export type UserViewCreateWithoutStatsInput = {
    id?: string
    ip: string
  }

  export type UserViewUncheckedCreateWithoutStatsInput = {
    id?: string
    ip: string
  }

  export type UserViewCreateOrConnectWithoutStatsInput = {
    where: UserViewWhereUniqueInput
    create: XOR<UserViewCreateWithoutStatsInput, UserViewUncheckedCreateWithoutStatsInput>
  }

  export type UserViewCreateManyStatsInputEnvelope = {
    data: UserViewCreateManyStatsInput | UserViewCreateManyStatsInput[]
    skipDuplicates?: boolean
  }

  export type ConsultasCreateWithoutStatsInput = {
    id?: string
    descripcion: string
    email: string
    numero: string
    createdAt?: Date | string
  }

  export type ConsultasUncheckedCreateWithoutStatsInput = {
    id?: string
    descripcion: string
    email: string
    numero: string
    createdAt?: Date | string
  }

  export type ConsultasCreateOrConnectWithoutStatsInput = {
    where: ConsultasWhereUniqueInput
    create: XOR<ConsultasCreateWithoutStatsInput, ConsultasUncheckedCreateWithoutStatsInput>
  }

  export type ConsultasCreateManyStatsInputEnvelope = {
    data: ConsultasCreateManyStatsInput | ConsultasCreateManyStatsInput[]
    skipDuplicates?: boolean
  }

  export type UserViewUpsertWithWhereUniqueWithoutStatsInput = {
    where: UserViewWhereUniqueInput
    update: XOR<UserViewUpdateWithoutStatsInput, UserViewUncheckedUpdateWithoutStatsInput>
    create: XOR<UserViewCreateWithoutStatsInput, UserViewUncheckedCreateWithoutStatsInput>
  }

  export type UserViewUpdateWithWhereUniqueWithoutStatsInput = {
    where: UserViewWhereUniqueInput
    data: XOR<UserViewUpdateWithoutStatsInput, UserViewUncheckedUpdateWithoutStatsInput>
  }

  export type UserViewUpdateManyWithWhereWithoutStatsInput = {
    where: UserViewScalarWhereInput
    data: XOR<UserViewUpdateManyMutationInput, UserViewUncheckedUpdateManyWithoutStatsInput>
  }

  export type UserViewScalarWhereInput = {
    AND?: UserViewScalarWhereInput | UserViewScalarWhereInput[]
    OR?: UserViewScalarWhereInput[]
    NOT?: UserViewScalarWhereInput | UserViewScalarWhereInput[]
    id?: StringFilter<"UserView"> | string
    ip?: StringFilter<"UserView"> | string
    statsMes?: StringFilter<"UserView"> | string
  }

  export type ConsultasUpsertWithWhereUniqueWithoutStatsInput = {
    where: ConsultasWhereUniqueInput
    update: XOR<ConsultasUpdateWithoutStatsInput, ConsultasUncheckedUpdateWithoutStatsInput>
    create: XOR<ConsultasCreateWithoutStatsInput, ConsultasUncheckedCreateWithoutStatsInput>
  }

  export type ConsultasUpdateWithWhereUniqueWithoutStatsInput = {
    where: ConsultasWhereUniqueInput
    data: XOR<ConsultasUpdateWithoutStatsInput, ConsultasUncheckedUpdateWithoutStatsInput>
  }

  export type ConsultasUpdateManyWithWhereWithoutStatsInput = {
    where: ConsultasScalarWhereInput
    data: XOR<ConsultasUpdateManyMutationInput, ConsultasUncheckedUpdateManyWithoutStatsInput>
  }

  export type ConsultasScalarWhereInput = {
    AND?: ConsultasScalarWhereInput | ConsultasScalarWhereInput[]
    OR?: ConsultasScalarWhereInput[]
    NOT?: ConsultasScalarWhereInput | ConsultasScalarWhereInput[]
    id?: StringFilter<"Consultas"> | string
    descripcion?: StringFilter<"Consultas"> | string
    email?: StringFilter<"Consultas"> | string
    numero?: StringFilter<"Consultas"> | string
    createdAt?: DateTimeFilter<"Consultas"> | Date | string
    statsMes?: StringFilter<"Consultas"> | string
  }

  export type StatsCreateWithoutUserViewsInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    cantidadDeConsultas?: ConsultasCreateNestedManyWithoutStatsInput
  }

  export type StatsUncheckedCreateWithoutUserViewsInput = {
    mes: string
    cantidadDeProductos: number
    cantidadDeBlogs: number
    cantidadDeConsultas?: ConsultasUncheckedCreateNestedManyWithoutStatsInput
  }

  export type StatsCreateOrConnectWithoutUserViewsInput = {
    where: StatsWhereUniqueInput
    create: XOR<StatsCreateWithoutUserViewsInput, StatsUncheckedCreateWithoutUserViewsInput>
  }

  export type StatsUpsertWithoutUserViewsInput = {
    update: XOR<StatsUpdateWithoutUserViewsInput, StatsUncheckedUpdateWithoutUserViewsInput>
    create: XOR<StatsCreateWithoutUserViewsInput, StatsUncheckedCreateWithoutUserViewsInput>
    where?: StatsWhereInput
  }

  export type StatsUpdateToOneWithWhereWithoutUserViewsInput = {
    where?: StatsWhereInput
    data: XOR<StatsUpdateWithoutUserViewsInput, StatsUncheckedUpdateWithoutUserViewsInput>
  }

  export type StatsUpdateWithoutUserViewsInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
    cantidadDeConsultas?: ConsultasUpdateManyWithoutStatsNestedInput
  }

  export type StatsUncheckedUpdateWithoutUserViewsInput = {
    mes?: StringFieldUpdateOperationsInput | string
    cantidadDeProductos?: IntFieldUpdateOperationsInput | number
    cantidadDeBlogs?: IntFieldUpdateOperationsInput | number
    cantidadDeConsultas?: ConsultasUncheckedUpdateManyWithoutStatsNestedInput
  }

  export type BlogCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: BlogLikeCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: BlogLikeUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutComentariosInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutComentariosInput, BlogUncheckedCreateWithoutComentariosInput>
  }

  export type UserCreateWithoutComentariosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    likes?: BlogLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutComentariosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    likes?: BlogLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutComentariosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
  }

  export type BlogUpsertWithoutComentariosInput = {
    update: XOR<BlogUpdateWithoutComentariosInput, BlogUncheckedUpdateWithoutComentariosInput>
    create: XOR<BlogCreateWithoutComentariosInput, BlogUncheckedCreateWithoutComentariosInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutComentariosInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutComentariosInput, BlogUncheckedUpdateWithoutComentariosInput>
  }

  export type BlogUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: BlogLikeUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: BlogLikeUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type UserUpsertWithoutComentariosInput = {
    update: XOR<UserUpdateWithoutComentariosInput, UserUncheckedUpdateWithoutComentariosInput>
    create: XOR<UserCreateWithoutComentariosInput, UserUncheckedCreateWithoutComentariosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComentariosInput, UserUncheckedUpdateWithoutComentariosInput>
  }

  export type UserUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    likes?: BlogLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    likes?: BlogLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogCreateWithoutLikesInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comentarios?: BlogCommentCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutLikesInput = {
    id?: string
    titulo: string
    contenido: string
    resumen: string
    imagen: string
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comentarios?: BlogCommentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutLikesInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    comentarios?: BlogCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    comentarios?: BlogCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type BlogUpsertWithoutLikesInput = {
    update: XOR<BlogUpdateWithoutLikesInput, BlogUncheckedUpdateWithoutLikesInput>
    create: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutLikesInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutLikesInput, BlogUncheckedUpdateWithoutLikesInput>
  }

  export type BlogUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: BlogCommentUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: BlogCommentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    comentarios?: BlogCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    comentarios?: BlogCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuloCreateManyProductInput = {
    id?: string
    titulo: string
    subtitulos?: ModuloCreatesubtitulosInput | string[]
  }

  export type ModuloUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
  }

  export type ModuloUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
  }

  export type ModuloUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    subtitulos?: ModuloUpdatesubtitulosInput | string[]
  }

  export type ProductCreateManyTipoInput = {
    id?: string
    titulo: string
    descripcion: string
    precioAntes?: Decimal | DecimalJsLike | number | string | null
    precioAhora: Decimal | DecimalJsLike | number | string
    imagenes?: ProductCreateimagenesInput | string[]
    video: string
    url_demo?: string | null
    url_full?: string | null
    visible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutTipoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTipoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutTipoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioAntes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precioAhora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagenes?: ProductUpdateimagenesInput | string[]
    video?: StringFieldUpdateOperationsInput | string
    url_demo?: NullableStringFieldUpdateOperationsInput | string | null
    url_full?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentCreateManyUserInput = {
    id?: string
    contenido: string
    blogId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogLikeCreateManyUserInput = {
    id?: string
    blogId: string
  }

  export type BlogCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type BlogCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blog?: BlogUpdateOneRequiredWithoutLikesNestedInput
  }

  export type BlogLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCommentCreateManyBlogInput = {
    id?: string
    contenido: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogLikeCreateManyBlogInput = {
    id?: string
    userId: string
  }

  export type BlogCommentUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type BlogCommentUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogLikeUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type BlogLikeUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogLikeUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserViewCreateManyStatsInput = {
    id?: string
    ip: string
  }

  export type ConsultasCreateManyStatsInput = {
    id?: string
    descripcion: string
    email: string
    numero: string
    createdAt?: Date | string
  }

  export type UserViewUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserViewUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserViewUncheckedUpdateManyWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultasUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultasUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultasUncheckedUpdateManyWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}