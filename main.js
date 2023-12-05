import "jquery"

let alt = "我是图片";

// 当点击按钮（class为btn的元素）时执行以下代码
$(".btn").click(function () {
  // 切换按钮的class为active
  $(this).toggleClass("active");
  // 切换box的class为open
  $(".box").toggleClass("open");
  // 切换introduce的class为introduce
  $(".introduce").toggleClass("ic");
});

// 当点击 .menu 下的 button 元素时执行的函数
$(".menu button").click(function () {
  // 切换按钮的状态
  $(".menu button").toggleClass("button");
  $(".blog-cover").toggleClass("active");
});

//获取免费公共的时间api然后把获取到的时间放到一个元素中

$(document).ready(function () {
  // 使用jQuery的ajax方法发送GET请求获取API数据
  $.ajax({
    url: "http://worldclockapi.com/api/json/utc/now",
    dataType: "json",
    success: function (data) {
      // 获取到API返回的时间
      var apiDateTimeString = data.currentDateTime;

      // 将API返回的时间转换为JavaScript的Date对象
      var apiDate = new Date(apiDateTimeString);

      // 转换为北京时间
      var beijingTime = new Date(apiDate.getTime() + 0 * 60 * 60 * 1000);

      // 将北京时间添加到一个元素中
      $("#Time").text(beijingTime.toLocaleString());
    },
  });
});

// 获取span元素
var spanElement = document.getElementById("span-1");

// 添加点击事件
spanElement.addEventListener("click", function () {
  // 创建一个新的textarea元素
  var textarea = document.createElement("textarea");

  // 设置textarea的值为span元素的内容
  textarea.value = spanElement.innerText;

  // 将textarea元素添加到页面中
  document.body.appendChild(textarea);

  // 选择textarea元素中的内容
  textarea.select();

  // 复制选中的内容到粘贴板
  document.execCommand("copy");

  // 删除textarea元素
  document.body.removeChild(textarea);

  // 提示复制成功
  alert("已复制到剪贴板");
});

// 获取GitHub上的项目数量和项目名称
// 当页面加载完成后执行的函数
$(document).ready(function () {
  // 获取 id 为 project 的元素
  var project = $("#project");
  // GitHub 的访问令牌
  var token = "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";
  // 请求头部信息
  var headers = {
    Authorization: "token " + token,
    Accept: "application/vnd.github.v3+json",
  };

  // GitHub API 的地址
  var url = "https://api.github.com/user/repos";
  // 发送 AJAX 请求
  $.ajax({
    url: url,
    headers: headers,
    dataType: "json",
    success: function (response) {
      // 获取项目数量
      var project_count = response.length;
      // 获取项目名称
      var project_names = response.map(function (repo) {
        return repo.name;
      });

      // 设置 projectsContent 变量为项目名称的连接字符串
      var projectsContent = project_names.join("<br>");
      // 设置 project 元素的 HTML 内容
      project.html(
        `项目数量：
            ${project_count}
            <br><span class=" iconfont icon-xiangmu"></span>
            项目名称：
            <br><span class="project-names">
            ${projectsContent}
            </span>`
      );

      // 设置 .project-names 元素的 word-break 属性为 break-all
      $(".project-names").css("word-break", "break-all");

      // 打印 "请求成功" 到控制台
      console.log("请求成功");
    },
    error: function () {
      // 设置 project 元素的 HTML 内容为 "无法访问GitHub"
      project.html("无法访问GitHub");
      // 打印 "出现问题" 到控制台
      console.log("出现问题");
    },
    // 设置请求超时时间为 10000 毫秒
    timeout: 10000,
  });
});
