function Customize_alert(content) {
  $("body").append(`
        <div 
        style="
            display: inline-flex; 
            top: 200px; 
            left: -50vh; 
            width:80vw;
            height: 50vh;
            background: #fff;
            z-index: 5;
        "
        >
            <h1 style="
              color: #000;
              position: relative;
              width: 100%;
              height: 100px;
            ">
                ${content}
            </h1>
            <button
            type="button" 
            onclick="window.location.href(mian.html)" 
            style="
                position: relative;
                border: none;
                color: #fff;
                width: 80%;
                height: 40%;
                background: #000fff;
                
            "
            >
                确认
            </button>
        </div>
    `);
}
