export default class utilClass {
  static addMethodsToScrollEvent = (methods: Array<() => void>) => {
    methods.forEach((method: () => void) => {
      window.addEventListener('scroll', method);
    });
  };

  static removeMethod = (method: () => void) => {
    window.removeEventListener('scroll', method);
  };
}
