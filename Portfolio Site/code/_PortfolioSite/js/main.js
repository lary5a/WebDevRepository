    $( document ).ready(function() {

	
    	$(".fancybox").fancybox();

    	console.log("document is ready!");

    	// jQuery can help you select HTML elements on your page
    	var $button = $(".button");

    	$("#poem").fancybox({
        	openEffect : 'none',
        	closeEffect	: 'none',
        	helpers : {
        		title : {
        			type : 'outside'
        		}
        	}
            // $("#poetrytitle").click();
        });

        $("#poetrytitle, #poem").click(function(){ 
            var poe = $(".poetry").width()/$('.poetry').parent().width()*100
            if (poe!=90){
                $(".poetry").removeClass("poetrysmall")
                $(".poetry").addClass("poetryfull");
                $(".midlit").hide();
                $(".prose").removeClass("prosefull");
                $(".prose").addClass("prosesmall");
                $(".prosepic").hide();
                $(".prose-texts").hide();
                $(".poetrypic").show();
                $(".poetry-texts").show();
                $("#prosetitle").addClass("prosetitlesmall");
                $("#poetrytitle").removeClass("poetrytitlesmall");
            }
        });

        $("#prosetitle").click(function(){ 
            $(".prose").removeClass("prosesmall");
            $(".prose").addClass("prosefull");
            $(".midlit").hide();
            $(".poetry").removeClass("poetryfull");
            $(".poetry").addClass("poetrysmall");
            $(".poetrypic").hide();
            $(".poetry-texts").hide();
            $(".prosepic").show();
            $(".prose-texts").show();
            $("#poetrytitle").addClass("poetrytitlesmall")
            $("#prosetitle").removeClass("prosetitlesmall");;
        });

        // $("#owl-demo").owlCarousel({
        //     items : 4
        // });
 
        // $('.link').on('click', function(event){
        //     var $this = $(this);
        //     if($this.hasClass('clicked')){
        //         $this.removeAttr('style').removeClass('clicked');
        //     } else{
        //         $this.css('background','#7fc242').addClass('clicked');
        //     }
        // }); 

        $("#owl-demo-img").owlCarousel({
 
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
 
         });

        $("#owl-demo").owlCarousel({
 
          // autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
        });

       


        $('.link').on('click', function(event){
            var $this = $(this);
            if($this.hasClass('v4')){
                $(".play4").show();
                $(".play3").hide();
                $(".play2").hide();
                $(".play1").hide();
            }
            if($this.hasClass('v3')){
                $(".play3").show();
                $(".play4").hide();
                $(".play2").hide();
                $(".play1").hide();
            }
            if($this.hasClass('v2')){
                $(".play2").show();
                $(".play3").hide();
                $(".play4").hide();
                $(".play1").hide();
            }
            if($this.hasClass('v1')){
                $(".play1").show();
                $(".play3").hide();
                $(".play2").hide();
                $(".play4").hide();
            }
        });

    });