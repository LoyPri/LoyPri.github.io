declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    buttonContainer: string;
    categoryContainer: string;
    description: string;
    image: string;
    imageContainer: string;
    imageLayer: string;
    infoContainer: string;
    name: string;
    noImage: string;
    price: string;
    productCard: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
