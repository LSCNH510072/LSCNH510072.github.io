// 当点击按钮（class为btn的元素）时执行以下代码
$(".btn").click(function () {
  // 切换按钮的class为active
  $(this).toggleClass("active");
  // 切换box的class为open
  $(".box").toggleClass("open");
  // 切换introduce的class为introduce
  $(".introduce").toggleClass("ic");
});

//使用JavaScript的框架库jQuery获取免费公共的时间api然后把获取到的时间放到一个元素中

$(document).ready(function () {
  // 使用jQuery的ajax方法发送GET请求获取API数据
  $.ajax({
    url: "http://worldclockapi.com/api/json/utc/now", // 替换为您的API URL
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

// 使用jQuery获取GitHub上的项目数量和项目名称
$(document).ready(function () {
  var project = $("#project");
  var token = "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";
  var headers = {
    Authorization: "token " + token,
    Accept: "application/vnd.github.v3+json",
  };

  var url = "https://api.github.com/user/repos";
  $.ajax({
    url: url,
    headers: headers,
    dataType: "json",
    success: function (response) {
      var project_count = response.length;
      var project_names = response.map(function (repo) {
        return repo.name;
      });

      rojectsContent = project_names.join("<br>");
      project.html(
        `项目数量：
            ${project_count}
            <br><span class=" iconfont icon-xiangmu"></span>
            项目名称：
            <br><span class="project-names">
            ${projectsContent}
            </span>`
      );

      $(".project-names").css("word-break", "break-all");

      console.log("请求成功");
    },
    error: function () {
      project.html("无法访问GitHub");
      console.log("出现问题");
    },
    timeout: 10000,
  });
});

$(".menu button").click(function () {
  $(".menu button").toggleClass("button");
});

// 定义函数
function searchHtmlFiles(folderPath, ids) {
  // 在指定路径下搜索文件夹找到HTML文件
  $.ajax({
    url: `http://127.0.0.1:5500/${folderPath}`,
    success: function (data) {
      // 处理搜索到的HTML文件
      $(data)
        .find('a[href$=".html"]')
        .each(function () {
          var htmlFilePath = $(this).attr("href");
          // 生成div并插入HTML内容
          generateDivWithHtmlContent(htmlFilePath, ids);
          console.log(ids);
        });
    },
  });
}

// 生成div并插入HTML内容
function generateDivWithHtmlContent(htmlFilePath, targetElementId) {
  $.get(htmlFilePath, function (data) {
    // 获取id为xxx的元素
    console.log(targetElementId);
    var $targetElement = $(targetElementId);

    // 创建一个新的div元素
    var $newDiv = $("<div id='blog-content'>").html(data);

    // 把HTML内容放到刚才生成的div元素里
    $targetElement.after($newDiv);

    // 将新的 div 元素插入到目标元素里
    $newDiv.classname  = "div-class";
    $(targetElementId).append($newDiv);
  });
}