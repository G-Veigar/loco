import { ElNotification as notify, ElMessageBox } from "element-plus";

function alert(options: { message: string; title: string }): Promise<string> {
  return new Promise<string>((resolve) => {
    const { message, title } = options;
    ElMessageBox.alert(message, title, {
      callback(action: string) {
        resolve(action);
      },
    });
  });
}

async function confirm(options: {
  message: string;
  title: string;
}): Promise<string> {
  const { message, title } = options;
  try {
    const res = await ElMessageBox.confirm(message, title, {});
    return res;
  } catch (err: any) {
    return err;
  }
}

export { notify, alert, confirm };
