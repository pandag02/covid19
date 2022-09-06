
        document.getElementById("donation").style.display = "none";    

        function donation_show() {
          document.getElementById("donation").style.display = "block";
        }

        function donation_hide() {
          document.getElementById("donation").style.display = "none";
        }
  

        //확진자 현황
        $(document).ready(function() {
          $("#hotel").hover(function() {
            $("#hotel").css("background-color", "#feecf0");}, //hover
            function() {
              $("#hotel").css("background-color", "#ffffff"); //non hovered
            
          });
        });

        $(document).ready(function() {
          $("#hotel").hover(function() {
            $("#hotel").css("color", "#cc0f35");}, //hover
            function() {
              $("#hotel").css("color", "#000000"); //non hovered
            
          });
        });

        //선별진료소
        $(document).ready(function() {
          $("#india").hover(function() {
            $("#india").css("background-color", "#d3fde0");}, //hover #ebfef1
            function() {
              $("#india").css("background-color", "#ffffff"); //non hovered
            
          });
        });

        $(document).ready(function() {
          $("#india").hover(function() {
            $("#india").css("color", "#299c0c");}, //hover  #005b42
            function() {
              $("#india").css("color", "#000000"); //non hovered
            
          });
        });

        //백신접종소
        $(document).ready(function() {
          $("#juliet").hover(function() {
            $("#juliet").css("background-color", "#d5fff5");}, //hover #eefffb
            function() {
              $("#juliet").css("background-color", "#ffffff"); //non hovered
            
          });
        });

        $(document).ready(function() {
          $("#juliet").hover(function() {
            $("#juliet").css("color", "#0f94cc");}, //hover   #006d8e
            function() {
              $("#juliet").css("color", "#000000"); //non hovered
            
          });
        });

        //이상반응 신고
        $(document).ready(function() {
          $("#kilo").hover(function() {
            $("#kilo").css("background-color", "#fff5d4");}, //hover  #fffbed
            function() {
              $("#kilo").css("background-color", "#ffffff"); //non hovered
            
          });
        });

        $(document).ready(function() {
          $("#kilo").hover(function() {
            $("#kilo").css("color", "#ffbf10");}, //hover
            function() {
              $("#kilo").css("color", "#000000"); //non hovered
            
          });
        });

        //코로나 블루
        $(document).ready(function() {
          $("#lima").hover(function() {
            $("#lima").css("background-color", "#d8e9ff");}, //hover
            function() {
              $("#lima").css("background-color", "#ffffff"); //non hovered
            
          });
        });

        $(document).ready(function() {
          $("#lima").hover(function() {
            $("#lima").css("color", "#113be4");}, //hover  #005a75
            function() {
              $("#lima").css("color", "#000000"); //non hovered
            
          });
        });