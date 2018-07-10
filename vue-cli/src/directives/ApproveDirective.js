export default {
  bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();

      let params = {
        textConfirm: '',
        styleConfirm: '',
        callback: null
      };

      if (typeof binding.value === 'object') {
        params = binding.value;
      } else {
        params.callback = binding.value;
      }

      let {textConfirm, styleConfirm, callback} = params;
      
      textConfirm = textConfirm || 'confirm header';
      styleConfirm = styleConfirm || 'red';

      const isOkayClicked = confirm(textConfirm + ' ' + styleConfirm);
      if (isOkayClicked) {
        callback();
      }
    });
  }
};
