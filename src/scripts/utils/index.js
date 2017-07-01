const Utils = {
  addComponentsRecursive(appModule, components) {
    components.forEach((item) => {
      const component = item.component;
      appModule.component(component.name, component.component);
      if (component.services) {
        appModule.service(component.services);
      }
      if (component.subcomponents) {
        Utils.addComponentsRecursive(appModule, component.subcomponents);
      }
    });
  }
};

export default Utils;
