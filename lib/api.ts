function getBaseUrl() {
  // 在服务端渲染时
  if (typeof window === 'undefined') {
    // 开发环境使用本地API
    if (process.env.NODE_ENV === 'development') {
      return 'http://127.0.0.1:8000';
    }
    // 生产环境使用环境变量配置的API地址
    return process.env.NEXT_PUBLIC_API_BASE || '';
  }
  // 客户端使用相对路径，会走 rewrites 配置
  return '';
}

export async function apiFetch(path: string, opts?: RequestInit) {
  const url = `${getBaseUrl()}${path}`;
  return fetch(url, opts);
}
