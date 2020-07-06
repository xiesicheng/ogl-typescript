import { Transform } from "./core/Transform";
import { Mesh } from "./Core";
import { OGLRenderingContext } from "./core/Renderer";

export const isArray = <T, U>(term: Array<T> | U): term is Array<T> => {
    return Array.isArray(term);
};

export const isArrayLike = <T>(term: any): term is ArrayLike<T> => {
    if (term.length)
        return true;
    return false;
};

export const isNull = <T>(term: T | null): term is null => {
    return term === null;
};

export const isUndefined = <T>(term: T | undefined): term is undefined => {
    return typeof term === "undefined";
};

export const isBoolean = <U>(term: boolean | U): term is boolean => {
    return typeof term === "boolean";
};

export const isNumber = <U>(term: number | U): term is number => {
    return typeof term === "number";
};

// export const isString = <U>(term: string | U): term is string => {
//     return typeof term === "string";
// };
export const isString = (term: unknown): term is string => {
    return typeof term === "string";
};

// export const isBigInt = <U>(term: bigint | U): term is bigint => {
//   return typeof term === "bigint";
// };

export const isSymbol = <U>(term: symbol | U): term is symbol => {
    return typeof term === "symbol";
};

export const isMesh = (node: Transform | Mesh): node is Mesh => {
    return !!(node as any).draw;
};

export const isWebGl2 = (gl: OGLRenderingContext): gl is OGLRenderingContext & WebGL2RenderingContext => {
    return gl.renderer.isWebgl2;
};


