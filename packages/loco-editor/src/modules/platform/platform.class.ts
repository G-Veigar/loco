type LocoBuildPlatformOptions = {
  name: string;
  render?: any; // 渲染器
}

export class LocoBuildPlatform {
  name: string;

  constructor(options: LocoBuildPlatformOptions) {
    this.name = options.name;
  }

  // 下载平台组件
  installPlatformComponent() {

  }
}
