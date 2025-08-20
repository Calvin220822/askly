import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

export default function Playground() {
  return (
    <div className="flex flex-col h-screen">
      <Header hasBack />
      <div className="flex-1 flex">
        <div className="overflow-y-auto h-full flex-none w-[500px] border-r">
          <h2>配置项</h2>
          <div>
            <Button>保存配置</Button>
          </div>
          <br />
          <div>选择模型</div>
          <div>设置Temperature</div>
          <div>设置Instructions</div>
          <br />
          <h4>嵌入</h4>
          <div>气泡方式</div>
          <div>iframe方式</div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-[500px] h-[80vh] bg-blue-400">
            这里会展示聊天界面
          </div>
        </div>
      </div>
    </div>
  );
}
