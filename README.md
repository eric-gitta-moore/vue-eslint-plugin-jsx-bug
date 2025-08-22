# Vue v-on inline function type hint error

In VSCode, there is a TypeScript plugin error prompt. However, using vue-tsc can detect the error. But the eslint-plugin-vue check passes.

[playground](https://play.vuejs.org/#eNqNU8GO0zAQ/ZWRhdSsVCVallNIK2DVAxwAATfMIaTT1FvHtmxnaVXl35mx6W5Bu+weomQ8b8Zv5r0cxVvnytsRRS2a0HnlIgSMowPdmn4hRQx7KZbSqMFZH+HaDg423g4gRVlxxMVSvJZGmjVulMFPLiprQnGUBsC0A9aEpVukmEszXSRkR4AI1lxr1e1gAYVrfTuEGo6ww0MNIXplepguamjNARZLSN24zGoste2LyznkopIquOtET1PlGYgwBREHp9uIFAE0ifqbjm+kufgInnMvVBWg99ZDPDiErTIRtugxN3iCEwMmfkkBFdFoqjNOYk7bpfKN6subYA1JkKaUoiOqSqP/s0opiGBuJkWrtf31IZ1FPyLtNJ93W+x2D5zfsIAswWePAf0tiXWXi63vMeb06utH3NP3XXKw61ET+j/JL0ijj8wxw96NZk20z3CJ7fvkHVrst7DaRzThNBQTZeSU8FKQlVilx0a/p3tVvkp1pDpt8WRD9vDfmv8cY7TmXvUXOKhYzFI4m59Un12+vJqR6GT0lGmqXPevYBQ+/IukPyS7f0UXhCa7lXvV8P0Rj/1gzy4LtsmZbcX0G6J5Lyw=)

```vue
<template>
  <Child
    @click="
      (params: { key: string }): any => {
        console.log(1, params.key);
      }
    "
  />
</template>
```

![](./image.png)