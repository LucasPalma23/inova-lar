
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
 * Model UserPublic
 * 
 */
export type UserPublic = $Result.DefaultSelection<Prisma.$UserPublicPayload>
/**
 * Model UserAdmin
 * 
 */
export type UserAdmin = $Result.DefaultSelection<Prisma.$UserAdminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserPublics
 * const userPublics = await prisma.userPublic.findMany()
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
   * // Fetch zero or more UserPublics
   * const userPublics = await prisma.userPublic.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userPublic`: Exposes CRUD operations for the **UserPublic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPublics
    * const userPublics = await prisma.userPublic.findMany()
    * ```
    */
  get userPublic(): Prisma.UserPublicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAdmin`: Exposes CRUD operations for the **UserAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAdmins
    * const userAdmins = await prisma.userAdmin.findMany()
    * ```
    */
  get userAdmin(): Prisma.UserAdminDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    UserPublic: 'UserPublic',
    UserAdmin: 'UserAdmin'
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
      modelProps: "userPublic" | "userAdmin"
      txIsolationLevel: never
    }
    model: {
      UserPublic: {
        payload: Prisma.$UserPublicPayload<ExtArgs>
        fields: Prisma.UserPublicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPublicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPublicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>
          }
          findFirst: {
            args: Prisma.UserPublicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPublicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>
          }
          findMany: {
            args: Prisma.UserPublicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>[]
          }
          create: {
            args: Prisma.UserPublicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>
          }
          createMany: {
            args: Prisma.UserPublicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPublicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>
          }
          update: {
            args: Prisma.UserPublicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>
          }
          deleteMany: {
            args: Prisma.UserPublicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPublicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPublicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPublicPayload>
          }
          aggregate: {
            args: Prisma.UserPublicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPublic>
          }
          groupBy: {
            args: Prisma.UserPublicGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPublicGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserPublicFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserPublicAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserPublicCountArgs<ExtArgs>
            result: $Utils.Optional<UserPublicCountAggregateOutputType> | number
          }
        }
      }
      UserAdmin: {
        payload: Prisma.$UserAdminPayload<ExtArgs>
        fields: Prisma.UserAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>
          }
          findFirst: {
            args: Prisma.UserAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>
          }
          findMany: {
            args: Prisma.UserAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>[]
          }
          create: {
            args: Prisma.UserAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>
          }
          createMany: {
            args: Prisma.UserAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>
          }
          update: {
            args: Prisma.UserAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>
          }
          deleteMany: {
            args: Prisma.UserAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdminPayload>
          }
          aggregate: {
            args: Prisma.UserAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAdmin>
          }
          groupBy: {
            args: Prisma.UserAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserAdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserAdminCountArgs<ExtArgs>
            result: $Utils.Optional<UserAdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    userPublic?: UserPublicOmit
    userAdmin?: UserAdminOmit
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
   * Models
   */

  /**
   * Model UserPublic
   */

  export type AggregateUserPublic = {
    _count: UserPublicCountAggregateOutputType | null
    _min: UserPublicMinAggregateOutputType | null
    _max: UserPublicMaxAggregateOutputType | null
  }

  export type UserPublicMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    providers: string | null
    createdAt: Date | null
  }

  export type UserPublicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    providers: string | null
    createdAt: Date | null
  }

  export type UserPublicCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    providers: number
    createdAt: number
    _all: number
  }


  export type UserPublicMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    providers?: true
    createdAt?: true
  }

  export type UserPublicMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    providers?: true
    createdAt?: true
  }

  export type UserPublicCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    providers?: true
    createdAt?: true
    _all?: true
  }

  export type UserPublicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPublic to aggregate.
     */
    where?: UserPublicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPublics to fetch.
     */
    orderBy?: UserPublicOrderByWithRelationInput | UserPublicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPublicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPublics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPublics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPublics
    **/
    _count?: true | UserPublicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPublicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPublicMaxAggregateInputType
  }

  export type GetUserPublicAggregateType<T extends UserPublicAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPublic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPublic[P]>
      : GetScalarType<T[P], AggregateUserPublic[P]>
  }




  export type UserPublicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPublicWhereInput
    orderBy?: UserPublicOrderByWithAggregationInput | UserPublicOrderByWithAggregationInput[]
    by: UserPublicScalarFieldEnum[] | UserPublicScalarFieldEnum
    having?: UserPublicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPublicCountAggregateInputType | true
    _min?: UserPublicMinAggregateInputType
    _max?: UserPublicMaxAggregateInputType
  }

  export type UserPublicGroupByOutputType = {
    id: string
    name: string
    password: string | null
    email: string
    providers: string
    createdAt: Date
    _count: UserPublicCountAggregateOutputType | null
    _min: UserPublicMinAggregateOutputType | null
    _max: UserPublicMaxAggregateOutputType | null
  }

  type GetUserPublicGroupByPayload<T extends UserPublicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPublicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPublicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPublicGroupByOutputType[P]>
            : GetScalarType<T[P], UserPublicGroupByOutputType[P]>
        }
      >
    >


  export type UserPublicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    providers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userPublic"]>



  export type UserPublicSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    providers?: boolean
    createdAt?: boolean
  }

  export type UserPublicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "email" | "providers" | "createdAt", ExtArgs["result"]["userPublic"]>

  export type $UserPublicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPublic"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string | null
      email: string
      providers: string
      createdAt: Date
    }, ExtArgs["result"]["userPublic"]>
    composites: {}
  }

  type UserPublicGetPayload<S extends boolean | null | undefined | UserPublicDefaultArgs> = $Result.GetResult<Prisma.$UserPublicPayload, S>

  type UserPublicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPublicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPublicCountAggregateInputType | true
    }

  export interface UserPublicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPublic'], meta: { name: 'UserPublic' } }
    /**
     * Find zero or one UserPublic that matches the filter.
     * @param {UserPublicFindUniqueArgs} args - Arguments to find a UserPublic
     * @example
     * // Get one UserPublic
     * const userPublic = await prisma.userPublic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPublicFindUniqueArgs>(args: SelectSubset<T, UserPublicFindUniqueArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPublic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPublicFindUniqueOrThrowArgs} args - Arguments to find a UserPublic
     * @example
     * // Get one UserPublic
     * const userPublic = await prisma.userPublic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPublicFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPublicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPublic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicFindFirstArgs} args - Arguments to find a UserPublic
     * @example
     * // Get one UserPublic
     * const userPublic = await prisma.userPublic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPublicFindFirstArgs>(args?: SelectSubset<T, UserPublicFindFirstArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPublic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicFindFirstOrThrowArgs} args - Arguments to find a UserPublic
     * @example
     * // Get one UserPublic
     * const userPublic = await prisma.userPublic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPublicFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPublicFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPublics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPublics
     * const userPublics = await prisma.userPublic.findMany()
     * 
     * // Get first 10 UserPublics
     * const userPublics = await prisma.userPublic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPublicWithIdOnly = await prisma.userPublic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPublicFindManyArgs>(args?: SelectSubset<T, UserPublicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPublic.
     * @param {UserPublicCreateArgs} args - Arguments to create a UserPublic.
     * @example
     * // Create one UserPublic
     * const UserPublic = await prisma.userPublic.create({
     *   data: {
     *     // ... data to create a UserPublic
     *   }
     * })
     * 
     */
    create<T extends UserPublicCreateArgs>(args: SelectSubset<T, UserPublicCreateArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPublics.
     * @param {UserPublicCreateManyArgs} args - Arguments to create many UserPublics.
     * @example
     * // Create many UserPublics
     * const userPublic = await prisma.userPublic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPublicCreateManyArgs>(args?: SelectSubset<T, UserPublicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPublic.
     * @param {UserPublicDeleteArgs} args - Arguments to delete one UserPublic.
     * @example
     * // Delete one UserPublic
     * const UserPublic = await prisma.userPublic.delete({
     *   where: {
     *     // ... filter to delete one UserPublic
     *   }
     * })
     * 
     */
    delete<T extends UserPublicDeleteArgs>(args: SelectSubset<T, UserPublicDeleteArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPublic.
     * @param {UserPublicUpdateArgs} args - Arguments to update one UserPublic.
     * @example
     * // Update one UserPublic
     * const userPublic = await prisma.userPublic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPublicUpdateArgs>(args: SelectSubset<T, UserPublicUpdateArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPublics.
     * @param {UserPublicDeleteManyArgs} args - Arguments to filter UserPublics to delete.
     * @example
     * // Delete a few UserPublics
     * const { count } = await prisma.userPublic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPublicDeleteManyArgs>(args?: SelectSubset<T, UserPublicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPublics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPublics
     * const userPublic = await prisma.userPublic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPublicUpdateManyArgs>(args: SelectSubset<T, UserPublicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPublic.
     * @param {UserPublicUpsertArgs} args - Arguments to update or create a UserPublic.
     * @example
     * // Update or create a UserPublic
     * const userPublic = await prisma.userPublic.upsert({
     *   create: {
     *     // ... data to create a UserPublic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPublic we want to update
     *   }
     * })
     */
    upsert<T extends UserPublicUpsertArgs>(args: SelectSubset<T, UserPublicUpsertArgs<ExtArgs>>): Prisma__UserPublicClient<$Result.GetResult<Prisma.$UserPublicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPublics that matches the filter.
     * @param {UserPublicFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userPublic = await prisma.userPublic.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserPublicFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserPublic.
     * @param {UserPublicAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userPublic = await prisma.userPublic.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserPublicAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserPublics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicCountArgs} args - Arguments to filter UserPublics to count.
     * @example
     * // Count the number of UserPublics
     * const count = await prisma.userPublic.count({
     *   where: {
     *     // ... the filter for the UserPublics we want to count
     *   }
     * })
    **/
    count<T extends UserPublicCountArgs>(
      args?: Subset<T, UserPublicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPublicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPublic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPublicAggregateArgs>(args: Subset<T, UserPublicAggregateArgs>): Prisma.PrismaPromise<GetUserPublicAggregateType<T>>

    /**
     * Group by UserPublic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPublicGroupByArgs} args - Group by arguments.
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
      T extends UserPublicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPublicGroupByArgs['orderBy'] }
        : { orderBy?: UserPublicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPublicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPublicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPublic model
   */
  readonly fields: UserPublicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPublic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPublicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserPublic model
   */
  interface UserPublicFieldRefs {
    readonly id: FieldRef<"UserPublic", 'String'>
    readonly name: FieldRef<"UserPublic", 'String'>
    readonly password: FieldRef<"UserPublic", 'String'>
    readonly email: FieldRef<"UserPublic", 'String'>
    readonly providers: FieldRef<"UserPublic", 'String'>
    readonly createdAt: FieldRef<"UserPublic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPublic findUnique
   */
  export type UserPublicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * Filter, which UserPublic to fetch.
     */
    where: UserPublicWhereUniqueInput
  }

  /**
   * UserPublic findUniqueOrThrow
   */
  export type UserPublicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * Filter, which UserPublic to fetch.
     */
    where: UserPublicWhereUniqueInput
  }

  /**
   * UserPublic findFirst
   */
  export type UserPublicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * Filter, which UserPublic to fetch.
     */
    where?: UserPublicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPublics to fetch.
     */
    orderBy?: UserPublicOrderByWithRelationInput | UserPublicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPublics.
     */
    cursor?: UserPublicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPublics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPublics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPublics.
     */
    distinct?: UserPublicScalarFieldEnum | UserPublicScalarFieldEnum[]
  }

  /**
   * UserPublic findFirstOrThrow
   */
  export type UserPublicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * Filter, which UserPublic to fetch.
     */
    where?: UserPublicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPublics to fetch.
     */
    orderBy?: UserPublicOrderByWithRelationInput | UserPublicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPublics.
     */
    cursor?: UserPublicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPublics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPublics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPublics.
     */
    distinct?: UserPublicScalarFieldEnum | UserPublicScalarFieldEnum[]
  }

  /**
   * UserPublic findMany
   */
  export type UserPublicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * Filter, which UserPublics to fetch.
     */
    where?: UserPublicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPublics to fetch.
     */
    orderBy?: UserPublicOrderByWithRelationInput | UserPublicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPublics.
     */
    cursor?: UserPublicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPublics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPublics.
     */
    skip?: number
    distinct?: UserPublicScalarFieldEnum | UserPublicScalarFieldEnum[]
  }

  /**
   * UserPublic create
   */
  export type UserPublicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * The data needed to create a UserPublic.
     */
    data: XOR<UserPublicCreateInput, UserPublicUncheckedCreateInput>
  }

  /**
   * UserPublic createMany
   */
  export type UserPublicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPublics.
     */
    data: UserPublicCreateManyInput | UserPublicCreateManyInput[]
  }

  /**
   * UserPublic update
   */
  export type UserPublicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * The data needed to update a UserPublic.
     */
    data: XOR<UserPublicUpdateInput, UserPublicUncheckedUpdateInput>
    /**
     * Choose, which UserPublic to update.
     */
    where: UserPublicWhereUniqueInput
  }

  /**
   * UserPublic updateMany
   */
  export type UserPublicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPublics.
     */
    data: XOR<UserPublicUpdateManyMutationInput, UserPublicUncheckedUpdateManyInput>
    /**
     * Filter which UserPublics to update
     */
    where?: UserPublicWhereInput
    /**
     * Limit how many UserPublics to update.
     */
    limit?: number
  }

  /**
   * UserPublic upsert
   */
  export type UserPublicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * The filter to search for the UserPublic to update in case it exists.
     */
    where: UserPublicWhereUniqueInput
    /**
     * In case the UserPublic found by the `where` argument doesn't exist, create a new UserPublic with this data.
     */
    create: XOR<UserPublicCreateInput, UserPublicUncheckedCreateInput>
    /**
     * In case the UserPublic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPublicUpdateInput, UserPublicUncheckedUpdateInput>
  }

  /**
   * UserPublic delete
   */
  export type UserPublicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
    /**
     * Filter which UserPublic to delete.
     */
    where: UserPublicWhereUniqueInput
  }

  /**
   * UserPublic deleteMany
   */
  export type UserPublicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPublics to delete
     */
    where?: UserPublicWhereInput
    /**
     * Limit how many UserPublics to delete.
     */
    limit?: number
  }

  /**
   * UserPublic findRaw
   */
  export type UserPublicFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserPublic aggregateRaw
   */
  export type UserPublicAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserPublic without action
   */
  export type UserPublicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPublic
     */
    select?: UserPublicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPublic
     */
    omit?: UserPublicOmit<ExtArgs> | null
  }


  /**
   * Model UserAdmin
   */

  export type AggregateUserAdmin = {
    _count: UserAdminCountAggregateOutputType | null
    _min: UserAdminMinAggregateOutputType | null
    _max: UserAdminMaxAggregateOutputType | null
  }

  export type UserAdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserAdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserAdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserAdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserAdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAdmin to aggregate.
     */
    where?: UserAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdmins to fetch.
     */
    orderBy?: UserAdminOrderByWithRelationInput | UserAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAdmins
    **/
    _count?: true | UserAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAdminMaxAggregateInputType
  }

  export type GetUserAdminAggregateType<T extends UserAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAdmin[P]>
      : GetScalarType<T[P], AggregateUserAdmin[P]>
  }




  export type UserAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAdminWhereInput
    orderBy?: UserAdminOrderByWithAggregationInput | UserAdminOrderByWithAggregationInput[]
    by: UserAdminScalarFieldEnum[] | UserAdminScalarFieldEnum
    having?: UserAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAdminCountAggregateInputType | true
    _min?: UserAdminMinAggregateInputType
    _max?: UserAdminMaxAggregateInputType
  }

  export type UserAdminGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    _count: UserAdminCountAggregateOutputType | null
    _min: UserAdminMinAggregateOutputType | null
    _max: UserAdminMaxAggregateOutputType | null
  }

  type GetUserAdminGroupByPayload<T extends UserAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAdminGroupByOutputType[P]>
            : GetScalarType<T[P], UserAdminGroupByOutputType[P]>
        }
      >
    >


  export type UserAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userAdmin"]>



  export type UserAdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt", ExtArgs["result"]["userAdmin"]>

  export type $UserAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["userAdmin"]>
    composites: {}
  }

  type UserAdminGetPayload<S extends boolean | null | undefined | UserAdminDefaultArgs> = $Result.GetResult<Prisma.$UserAdminPayload, S>

  type UserAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAdminCountAggregateInputType | true
    }

  export interface UserAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAdmin'], meta: { name: 'UserAdmin' } }
    /**
     * Find zero or one UserAdmin that matches the filter.
     * @param {UserAdminFindUniqueArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAdminFindUniqueArgs>(args: SelectSubset<T, UserAdminFindUniqueArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAdminFindUniqueOrThrowArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminFindFirstArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAdminFindFirstArgs>(args?: SelectSubset<T, UserAdminFindFirstArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminFindFirstOrThrowArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAdmins
     * const userAdmins = await prisma.userAdmin.findMany()
     * 
     * // Get first 10 UserAdmins
     * const userAdmins = await prisma.userAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAdminWithIdOnly = await prisma.userAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAdminFindManyArgs>(args?: SelectSubset<T, UserAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAdmin.
     * @param {UserAdminCreateArgs} args - Arguments to create a UserAdmin.
     * @example
     * // Create one UserAdmin
     * const UserAdmin = await prisma.userAdmin.create({
     *   data: {
     *     // ... data to create a UserAdmin
     *   }
     * })
     * 
     */
    create<T extends UserAdminCreateArgs>(args: SelectSubset<T, UserAdminCreateArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAdmins.
     * @param {UserAdminCreateManyArgs} args - Arguments to create many UserAdmins.
     * @example
     * // Create many UserAdmins
     * const userAdmin = await prisma.userAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAdminCreateManyArgs>(args?: SelectSubset<T, UserAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAdmin.
     * @param {UserAdminDeleteArgs} args - Arguments to delete one UserAdmin.
     * @example
     * // Delete one UserAdmin
     * const UserAdmin = await prisma.userAdmin.delete({
     *   where: {
     *     // ... filter to delete one UserAdmin
     *   }
     * })
     * 
     */
    delete<T extends UserAdminDeleteArgs>(args: SelectSubset<T, UserAdminDeleteArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAdmin.
     * @param {UserAdminUpdateArgs} args - Arguments to update one UserAdmin.
     * @example
     * // Update one UserAdmin
     * const userAdmin = await prisma.userAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAdminUpdateArgs>(args: SelectSubset<T, UserAdminUpdateArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAdmins.
     * @param {UserAdminDeleteManyArgs} args - Arguments to filter UserAdmins to delete.
     * @example
     * // Delete a few UserAdmins
     * const { count } = await prisma.userAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAdminDeleteManyArgs>(args?: SelectSubset<T, UserAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAdmins
     * const userAdmin = await prisma.userAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAdminUpdateManyArgs>(args: SelectSubset<T, UserAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAdmin.
     * @param {UserAdminUpsertArgs} args - Arguments to update or create a UserAdmin.
     * @example
     * // Update or create a UserAdmin
     * const userAdmin = await prisma.userAdmin.upsert({
     *   create: {
     *     // ... data to create a UserAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAdmin we want to update
     *   }
     * })
     */
    upsert<T extends UserAdminUpsertArgs>(args: SelectSubset<T, UserAdminUpsertArgs<ExtArgs>>): Prisma__UserAdminClient<$Result.GetResult<Prisma.$UserAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAdmins that matches the filter.
     * @param {UserAdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAdmin = await prisma.userAdmin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserAdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAdmin.
     * @param {UserAdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAdmin = await prisma.userAdmin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminCountArgs} args - Arguments to filter UserAdmins to count.
     * @example
     * // Count the number of UserAdmins
     * const count = await prisma.userAdmin.count({
     *   where: {
     *     // ... the filter for the UserAdmins we want to count
     *   }
     * })
    **/
    count<T extends UserAdminCountArgs>(
      args?: Subset<T, UserAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAdminAggregateArgs>(args: Subset<T, UserAdminAggregateArgs>): Prisma.PrismaPromise<GetUserAdminAggregateType<T>>

    /**
     * Group by UserAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminGroupByArgs} args - Group by arguments.
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
      T extends UserAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAdminGroupByArgs['orderBy'] }
        : { orderBy?: UserAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAdmin model
   */
  readonly fields: UserAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserAdmin model
   */
  interface UserAdminFieldRefs {
    readonly id: FieldRef<"UserAdmin", 'String'>
    readonly username: FieldRef<"UserAdmin", 'String'>
    readonly password: FieldRef<"UserAdmin", 'String'>
    readonly createdAt: FieldRef<"UserAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAdmin findUnique
   */
  export type UserAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserAdmin to fetch.
     */
    where: UserAdminWhereUniqueInput
  }

  /**
   * UserAdmin findUniqueOrThrow
   */
  export type UserAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserAdmin to fetch.
     */
    where: UserAdminWhereUniqueInput
  }

  /**
   * UserAdmin findFirst
   */
  export type UserAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserAdmin to fetch.
     */
    where?: UserAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdmins to fetch.
     */
    orderBy?: UserAdminOrderByWithRelationInput | UserAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAdmins.
     */
    cursor?: UserAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAdmins.
     */
    distinct?: UserAdminScalarFieldEnum | UserAdminScalarFieldEnum[]
  }

  /**
   * UserAdmin findFirstOrThrow
   */
  export type UserAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserAdmin to fetch.
     */
    where?: UserAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdmins to fetch.
     */
    orderBy?: UserAdminOrderByWithRelationInput | UserAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAdmins.
     */
    cursor?: UserAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAdmins.
     */
    distinct?: UserAdminScalarFieldEnum | UserAdminScalarFieldEnum[]
  }

  /**
   * UserAdmin findMany
   */
  export type UserAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserAdmins to fetch.
     */
    where?: UserAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdmins to fetch.
     */
    orderBy?: UserAdminOrderByWithRelationInput | UserAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAdmins.
     */
    cursor?: UserAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdmins.
     */
    skip?: number
    distinct?: UserAdminScalarFieldEnum | UserAdminScalarFieldEnum[]
  }

  /**
   * UserAdmin create
   */
  export type UserAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a UserAdmin.
     */
    data: XOR<UserAdminCreateInput, UserAdminUncheckedCreateInput>
  }

  /**
   * UserAdmin createMany
   */
  export type UserAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAdmins.
     */
    data: UserAdminCreateManyInput | UserAdminCreateManyInput[]
  }

  /**
   * UserAdmin update
   */
  export type UserAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a UserAdmin.
     */
    data: XOR<UserAdminUpdateInput, UserAdminUncheckedUpdateInput>
    /**
     * Choose, which UserAdmin to update.
     */
    where: UserAdminWhereUniqueInput
  }

  /**
   * UserAdmin updateMany
   */
  export type UserAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAdmins.
     */
    data: XOR<UserAdminUpdateManyMutationInput, UserAdminUncheckedUpdateManyInput>
    /**
     * Filter which UserAdmins to update
     */
    where?: UserAdminWhereInput
    /**
     * Limit how many UserAdmins to update.
     */
    limit?: number
  }

  /**
   * UserAdmin upsert
   */
  export type UserAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the UserAdmin to update in case it exists.
     */
    where: UserAdminWhereUniqueInput
    /**
     * In case the UserAdmin found by the `where` argument doesn't exist, create a new UserAdmin with this data.
     */
    create: XOR<UserAdminCreateInput, UserAdminUncheckedCreateInput>
    /**
     * In case the UserAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAdminUpdateInput, UserAdminUncheckedUpdateInput>
  }

  /**
   * UserAdmin delete
   */
  export type UserAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
    /**
     * Filter which UserAdmin to delete.
     */
    where: UserAdminWhereUniqueInput
  }

  /**
   * UserAdmin deleteMany
   */
  export type UserAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAdmins to delete
     */
    where?: UserAdminWhereInput
    /**
     * Limit how many UserAdmins to delete.
     */
    limit?: number
  }

  /**
   * UserAdmin findRaw
   */
  export type UserAdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserAdmin aggregateRaw
   */
  export type UserAdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserAdmin without action
   */
  export type UserAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdmin
     */
    select?: UserAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdmin
     */
    omit?: UserAdminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserPublicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email',
    providers: 'providers',
    createdAt: 'createdAt'
  };

  export type UserPublicScalarFieldEnum = (typeof UserPublicScalarFieldEnum)[keyof typeof UserPublicScalarFieldEnum]


  export const UserAdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserAdminScalarFieldEnum = (typeof UserAdminScalarFieldEnum)[keyof typeof UserAdminScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserPublicWhereInput = {
    AND?: UserPublicWhereInput | UserPublicWhereInput[]
    OR?: UserPublicWhereInput[]
    NOT?: UserPublicWhereInput | UserPublicWhereInput[]
    id?: StringFilter<"UserPublic"> | string
    name?: StringFilter<"UserPublic"> | string
    password?: StringNullableFilter<"UserPublic"> | string | null
    email?: StringFilter<"UserPublic"> | string
    providers?: StringFilter<"UserPublic"> | string
    createdAt?: DateTimeFilter<"UserPublic"> | Date | string
  }

  export type UserPublicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    providers?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPublicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserPublicWhereInput | UserPublicWhereInput[]
    OR?: UserPublicWhereInput[]
    NOT?: UserPublicWhereInput | UserPublicWhereInput[]
    name?: StringFilter<"UserPublic"> | string
    password?: StringNullableFilter<"UserPublic"> | string | null
    providers?: StringFilter<"UserPublic"> | string
    createdAt?: DateTimeFilter<"UserPublic"> | Date | string
  }, "id" | "email">

  export type UserPublicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    providers?: SortOrder
    createdAt?: SortOrder
    _count?: UserPublicCountOrderByAggregateInput
    _max?: UserPublicMaxOrderByAggregateInput
    _min?: UserPublicMinOrderByAggregateInput
  }

  export type UserPublicScalarWhereWithAggregatesInput = {
    AND?: UserPublicScalarWhereWithAggregatesInput | UserPublicScalarWhereWithAggregatesInput[]
    OR?: UserPublicScalarWhereWithAggregatesInput[]
    NOT?: UserPublicScalarWhereWithAggregatesInput | UserPublicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPublic"> | string
    name?: StringWithAggregatesFilter<"UserPublic"> | string
    password?: StringNullableWithAggregatesFilter<"UserPublic"> | string | null
    email?: StringWithAggregatesFilter<"UserPublic"> | string
    providers?: StringWithAggregatesFilter<"UserPublic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPublic"> | Date | string
  }

  export type UserAdminWhereInput = {
    AND?: UserAdminWhereInput | UserAdminWhereInput[]
    OR?: UserAdminWhereInput[]
    NOT?: UserAdminWhereInput | UserAdminWhereInput[]
    id?: StringFilter<"UserAdmin"> | string
    username?: StringFilter<"UserAdmin"> | string
    password?: StringFilter<"UserAdmin"> | string
    createdAt?: DateTimeFilter<"UserAdmin"> | Date | string
  }

  export type UserAdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserAdminWhereInput | UserAdminWhereInput[]
    OR?: UserAdminWhereInput[]
    NOT?: UserAdminWhereInput | UserAdminWhereInput[]
    password?: StringFilter<"UserAdmin"> | string
    createdAt?: DateTimeFilter<"UserAdmin"> | Date | string
  }, "id" | "username">

  export type UserAdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserAdminCountOrderByAggregateInput
    _max?: UserAdminMaxOrderByAggregateInput
    _min?: UserAdminMinOrderByAggregateInput
  }

  export type UserAdminScalarWhereWithAggregatesInput = {
    AND?: UserAdminScalarWhereWithAggregatesInput | UserAdminScalarWhereWithAggregatesInput[]
    OR?: UserAdminScalarWhereWithAggregatesInput[]
    NOT?: UserAdminScalarWhereWithAggregatesInput | UserAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAdmin"> | string
    username?: StringWithAggregatesFilter<"UserAdmin"> | string
    password?: StringWithAggregatesFilter<"UserAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAdmin"> | Date | string
  }

  export type UserPublicCreateInput = {
    id?: string
    name: string
    password?: string | null
    email: string
    providers: string
    createdAt?: Date | string
  }

  export type UserPublicUncheckedCreateInput = {
    id?: string
    name: string
    password?: string | null
    email: string
    providers: string
    createdAt?: Date | string
  }

  export type UserPublicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    providers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPublicUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    providers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPublicCreateManyInput = {
    id?: string
    name: string
    password?: string | null
    email: string
    providers: string
    createdAt?: Date | string
  }

  export type UserPublicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    providers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPublicUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    providers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAdminCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserAdminUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserAdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAdminUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAdminCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserAdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAdminUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type UserPublicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    providers?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPublicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    providers?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPublicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    providers?: SortOrder
    createdAt?: SortOrder
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
    isSet?: boolean
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

  export type UserAdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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