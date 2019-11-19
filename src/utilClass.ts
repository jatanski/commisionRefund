/* eslint-disable no-undef */

export default class utilClass {
  static addMethodsToScrollEvent = (methods: Array<() => void>) => {
    methods.forEach((method: () => void) => {
      window.addEventListener('scroll', method);
    });
  };
}
