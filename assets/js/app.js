jQuery(function (e) {
    e(document).ready(function () {
        //e("#input_text").val(''); 
       e(document).on("click","#button_encriptar",function(){
            //e("#result_container_textarea").val(''); 
            var array_words = e("#input_text").val().split(" ");
            var t = array_words.length;
            var result;
            for(i=0;i<t;i++){
                var array_letters = array_words[i].split(""); 
                var v = array_letters.length;
                for(j=0;j<v;j++){
                    var x = array_letters[j];
                    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) {
                        if(x == "a"){
                            array_letters[j] = "ai";
                        }
                        if(x == "e"){
                            array_letters[j] = "enter";
                        }
                        if(x == "i"){
                            array_letters[j] = "imes";
                        }
                        if(x == "o"){
                            array_letters[j] = "ober";
                        }
                        if(x == "u"){
                            array_letters[j] = "ufat";
                        }
                    }
                array_words[i] = array_letters.join("");    
                }

            }
            console.log(array_words);
            result = array_words.join(" ");
            console.log(result);
            e("#image_disappears").hide();
            e(".container_right_text").hide();
            //e(".container_right").hide();
            e("#result_container_textarea").empty().append(result);
            e("#result_container_textarea").show();
            e("#button_copiar").show();
            e("#input_text").val('');
        });
        e(document).on("click","#button_desencriptar",function(){
            var array_words = e("#input_text").val().split(" ");
            var t = array_words.length;
            for(i=0;i<t;i++){
                while((array_words[i].indexOf("ai")!= -1) || (array_words[i].indexOf("enter")!= -1) || (array_words[i].indexOf("imes")!= -1) 
                    || (array_words[i].indexOf("ober")!= -1) || (array_words[i].indexOf("ufat")!= -1)){
                        array_words[i] = array_words[i].replace("ai","a");
                        console.log(array_words[i]);
                        array_words[i] = array_words[i].replace("enter","e");
                        array_words[i] = array_words[i].replace("imes","i");
                        array_words[i] = array_words[i].replace("ober","o");
                        console.log(array_words[i]);
                        array_words[i] = array_words[i].replace("ufat","u");
                    }
                    //array_words[i].append(" ");
            }
            e("#image_disappears").hide();
            e(".container_right_text").hide();
            var result = array_words.join(" ");
            e("#result_container_textarea").empty().append(result);
            e("#result_container_textarea").show();
            e("#button_copiar").show();
            e("#input_text").val('');    
        });
        e(document).on("click","#button_copiar",function() {
            var textToCopy = e("#result_container_textarea").text();
            //textToCopy.focus();
            //textToCopy.select();
            var tempTextarea = e('<textarea>');
            e('body').append(tempTextarea);
            tempTextarea.val(textToCopy).select();
            document.execCommand('copy');
            tempTextarea.remove();
          });
    })
});

  