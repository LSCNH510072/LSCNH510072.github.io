function searchBlogFiles(folderPath, ids, folderNumber, remotelocalhost, url) {
    var $remotelocalhost = '';
    if (remotelocalhost == "localhost") {
        var $remotelocalhost = "./";
        console.log($remotelocalhost);
    } else {
        var $remotelocalhost = url + "/";
        console.log($remotelocalhost);
    }
    var $targetElement = $(ids);
    $.get(`${$remotelocalhost}${folderPath}/${"0" + folderNumber}/disposition.json`, function (res) {
        var $newCover_title = res.title;
        var $newCover_img = res.img;
        var $newCover_introduce = res.introduce;
          <h1>${$newCover_title}</h1>
          <img src="${$newCover_img}" alt="${alt}"/>
          <p>${$newCover_introduce}</p>
          <label>
            <span>阅读全文</span>
            <input type="checkbox" hidden>
          </label>
        `;
        var $Cover_content = $(`<div class="blog-cover" id='${folderNumber}'>`).html($newCover);
        $targetElement.append($Cover_content);


        $.get(`${$remotelocalhost}${folderPath}/${("0" + folderNumber)}/index.html`, function (data) {
            console.log(ids);

            // 创建一个新的div元素
            var $newDiv = $(`<div class='blog-content'>`).html(`<header><span class="iconfont icon-guanbi" style="margin-left: auto;"></span></header>${data}`
            );

            // 将新的 div 元素插入到目标元素里
            $(`#${folderNumber} label`).append($newDiv);
            searchBlogFiles(folderPath, ids, folderNumber + 1, remotelocalhost, url);
        })
    }
    );
}
