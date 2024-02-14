const inputTextArea = document.getElementById('inputtext');
const outputDiv = document.getElementById('outputDiv');

inputTextArea.addEventListener('input', function() {
  // 修改默认显示的字符
  outputDiv.innerHTML = '等待输入...';

  const inputText = inputTextArea.value;
  if (inputText === '') {
    return;
  }

  const chars = inputText.split('');
  let outputText = '真是';

  for (let i = 0; i < chars.length; i++) {
    outputText += chars[i].repeat(2);
    if (i < chars.length - 1) {
      outputText += '又';
    }
  }

  outputDiv.innerHTML = outputText + '啊';
});

document.getElementById("copyOutput").addEventListener("click", function () {
    // 获取文本内容
    const outputText = document.getElementById("outputDiv").innerText;
  
    // 使用 Clipboard API 复制文本
    navigator.clipboard.writeText(outputText).then(() => {
      // 复制成功后执行动画
  
      // 获取元素
      const copiedElement = document.getElementById("copied");
  
      // 设置初始透明度为 0
      copiedElement.style.opacity = 0;
  
      // 设置过渡动画，使用贝塞尔曲线 (0.4, 0, 0.2, 1)
      copiedElement.style.transition = "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  
      // 设置最终透明度为 1
      copiedElement.style.opacity = 1;
  
      // 两秒后执行删除动画
      setTimeout(() => {
        copiedElement.style.transition = "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        copiedElement.style.opacity = 0;
  
        // 两秒后移除动画样式
        setTimeout(() => {
          copiedElement.style.removeProperty("transition");
          copiedElement.style.removeProperty("opacity");
        }, 2000);
      }, 2000);
    }, () => {
    });
  });