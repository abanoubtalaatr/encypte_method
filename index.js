let start_encrypte = document.getElementById('start_affine_encrypte'),
    text_to_encrypte = document.getElementById('Affine_encrypte'),
    key_for_encrypte = document.getElementById('Affine_key'),
    decrypte = document.getElementById('Affine_decrypte');

start_encrypte.onclick = function(ev){

	ev.preventDefault();
    let string_key = key_for_encrypte.value;
    let key = string_key.split(',');
    let ciphertext= [];
    
    // first get position for this letter in alphapet
    for(let i = 0; i< text_to_encrypte.value.length;i++){

        let position = text_to_encrypte.value.charCodeAt(i) - 97;

        //equation for affine cipher to encrypte

        let newChar = (Number(position) * Number(key[0]) +Number(key[1]) ) % 26;

        ciphertext +=String.fromCharCode(newChar+97);

         decrypte.value= ciphertext;
        
    } // end for 
}// end encrypte using affine 




let start_decrypte = document.getElementById('start_decrypte');
let text_to_decrypte = document.getElementById('text_decrypted');
let key_of_decrypte = document.getElementById('Affine_key_d');
let encrypted = document.getElementById('encrypted');
   



start_decrypte.onclick = function(ev){

	ev.preventDefault();

    let plain='';
    let string_key = key_of_decrypte.value;
    let key = string_key.split(',');
    let ciphertext= [];
    
    let correct_number_inverse ;

    for(let i = 1 ; i<= 10; i++){
        correct_number_inverse = ((i * 26) + 1) / key[0];

        if(Number.isInteger(correct_number_inverse)){
        	break;
        }//if
    }// end for 

    
    // first get position for this letter in alphapet

    for(let x = 0; x < text_to_decrypte.value.length;x++){

        
        //equation for affine cipher to decrpte
         if(text_to_decrypte.value.charCodeAt(x)>=97 || text_to_decrypte.value.charCodeAt(x)<=122){
            
         	let position = text_to_decrypte.value.charCodeAt(x) - 97;

         	let plaintext = correct_number_inverse * (position - key[1]) % 26;
         	 plain +=String.fromCharCode(plaintext + 97);
         	

         }else if (text_to_decrypte.value.charCodeAt(x)>=65 || text_to_decrypte.value.charCodeAt(x)<=90){
           
           let position = text_to_decrypte.value.charCodeAt(x) - 65;
           let plaintext = correct_number_inverse * (position - key[1]) % 26;
           plain +=String.fromCharCode(plaintext + 65);

         }
        encrypted.value = plain;
        
    } // end for 
}// end decrypte using affine 



//start caser 
let start_caeser_encrypte = document.getElementById('start_encrypte_caeser'),
    text_caeser_want_encrypte = document.getElementById('caeser_want_encrypte'),
    key_caeser = document.getElementById('caeser_key'),
    caeser_encrypted = document.getElementById('caeser_encrypted');

start_caeser_encrypte.onclick = function(ev){
  ev.preventDefault();
  caeser_encrypted.value = '';
  let ciphertext = '';
  /// this for small character

  for(let i = 0; i < text_caeser_want_encrypte.value.length; i++){
  	
       //let position = text_caeser_want_encrypte.value.charCodeAt(i) - 97;
        if(text_caeser_want_encrypte.value.charCodeAt(i)>= 97 && text_caeser_want_encrypte.value.charCodeAt(i)<= 122 ){
        	 ciphertext =( Number(key_caeser.value) + text_caeser_want_encrypte.value.charCodeAt(i)) ;
	       
	       if(ciphertext > 122){
	       	  ciphertext = Number(key_caeser.value) + 96;
	       }else if(ciphertext < 97){
	         	ciphertext =  Number(key_caeser.value) + 123;
	       }else{
	       	ciphertext =( Number(key_caeser.value) + text_caeser_want_encrypte.value.charCodeAt(i)) ;
	       }
	       caeser_encrypted.value +=String.fromCharCode( ciphertext);
         }

          else if(text_caeser_want_encrypte.value.charCodeAt(i)>= 65 && text_caeser_want_encrypte.value.charCodeAt(i)<= 90 ){
             
        	ciphertext =( Number(key_caeser.value) + text_caeser_want_encrypte.value.charCodeAt(i));
	       if(ciphertext > 90){
	       	  ciphertext = Number(key_caeser.value) + 64;
	       }else if(ciphertext < 65){
	         	 ciphertext =  Number(key_caeser.value) + 91;
	       }else{
	       	ciphertext =( Number(key_caeser.value) + text_caeser_want_encrypte.value.charCodeAt(i));
	       }
	       caeser_encrypted.value +=String.fromCharCode( ciphertext);
        }else{

        	ciphertext =( Number(key_caeser.value) + text_caeser_want_encrypte.value.charCodeAt(i));
            caeser_encrypted.value +=String.fromCharCode( ciphertext);
        }

      
      
  }//for


}  //end caser encrypte  

// start caser decrypte 

let start_decrypte_caeser =document.getElementById('start_decrypte_caeser'),
    text_caeser_encrypted = document.getElementById('text_caeser_encrypted'),
    caeser_key = document.getElementById('caeser_key2'),
    caeser_begin = document.getElementById('caeser_begin');

start_decrypte_caeser.onclick = function(ev){
  ev.preventDefault();
  caeser_begin.value ='';
 let plaintext = '';

  for(let i = 0; i< text_caeser_encrypted.value.length;i++){
      
      if(text_caeser_encrypted.value.charCodeAt(i)>= 97 && text_caeser_encrypted.value.charCodeAt(i)<= 122 ){
     
        plain = text_caeser_encrypted.value.charCodeAt(i) - Number(caeser_key.value);

        if(plain < 97){
           plain = 122 + Number(caeser_key.value);
           plaintext =String.fromCharCode(plain);
           caeser_begin.value += plaintext;
        }else if (plain > 122){
           plain = 96 + Number(caeser_key.value);
           plaintext =String.fromCharCode(plain);
           caeser_begin.value += plaintext;
        }else{
           plaintext =String.fromCharCode(plain);
           caeser_begin.value += plaintext;
        }
       
      }
      else if (text_caeser_encrypted.value.charCodeAt(i)>= 65 && text_caeser_encrypted.value.charCodeAt(i)<= 90){

      	plain = text_caeser_encrypted.value.charCodeAt(i) - Number(caeser_key.value);
      	 if(plain < 65){
           plain = 89 + Number(caeser_key.value);
           plaintext =String.fromCharCode(plain);
           caeser_begin.value += plaintext;
        }else if(plain > 90){
           plain = 64 + Number(caeser_key.value);
           plaintext =String.fromCharCode(plain);
           caeser_begin.value += plaintext;
        }else{
        	caeser_begin.value += plaintext;
        }
      	
      }
      else{
      	plain = text_caeser_encrypted.value.charCodeAt(i) - Number(caeser_key.value);
      	plaintext +=String.fromCharCode(plain);
      	caeser_begin.value += plaintext;
      }
  }//end for 
}
// atbash cipher 
let start_atbash_encrypte = document.getElementById('start_atbash_encrypte'),
    text_Atbash_want_to_encrypte = document.getElementById('Atbash_want_to_encrypte'),
    text_Atbash_message_encrypted =document.getElementById('Atbash_message_encrypted');
  	let	letter = [];
        letter[25] ="a";
	    letter[24] ="b";
	    letter[23] ="c";
	    letter[22] ="d";
	    letter[21] ="e";
	    letter[20] ="f";
	    letter[19] ="g";
	    letter[18] ="h";
	    letter[17] ="i";
	    letter[16] ="j";
	    letter[15] ="k";
	    letter[14] ="l";
	    letter[13] ="m";
	    letter[12] ="n";
	    letter[11] ="o";
	    letter[10] ="p";
	    letter[9] ="q";
	    letter[8] ='r';
	    letter[7] ='s';
	    letter[6] ='t';
	    letter[5] ='u';
	    letter[4] ="v";
	    letter[3] ='w';
	    letter[2] ='x';
	    letter[1] ='y';
	    letter[0] ='z';
let	letter2 = [];
        letter2[25] ="A";
	    letter2[24] ="B";
	    letter2[23] ="C";
	    letter2[22] ="D";
	    letter2[21] ="E";
	    letter2[20] ="F";
	    letter2[19] ="G";
	    letter2[18] ="H";
	    letter2[17] ="I";
	    letter2[16] ="J";
	    letter2[15] ="K";
	    letter2[14] ="L";
	    letter2[13] ="M";
	    letter2[12] ="N";
	    letter2[11] ="O";
	    letter2[10] ="P";
	    letter2[9] ="Q";
	    letter2[8] ='R';
	    letter2[7] ='S';
	    letter2[6] ='T';
	    letter2[5] ='U';
	    letter2[4] ="V";
	    letter2[3] ='W';
	    letter2[2] ='X';
	    letter2[1] ='Y';
	    letter2[0] ='Z';
start_atbash_encrypte.onclick = function(ev){
     ev.preventDefault();
     text_Atbash_message_encrypted.value ='';
    let ciphertext = '';

    for(let i = 0; i< text_Atbash_want_to_encrypte.value.length;i++){
    	if(text_Atbash_want_to_encrypte.value.charCodeAt(i)>= 97 && text_Atbash_want_to_encrypte.value.charCodeAt(i)<= 122 ){
          
          let position = text_Atbash_want_to_encrypte.value.charCodeAt(i) - 97;
          ciphertext += letter[position];

    	}else if (text_Atbash_want_to_encrypte.value.charCodeAt(i)>= 65 && text_Atbash_want_to_encrypte.value.charCodeAt(i)<= 90 ){
    	 let position = text_Atbash_want_to_encrypte.value.charCodeAt(i) - 65;
          ciphertext += letter2[position];
    	}
    	text_Atbash_message_encrypted.value = ciphertext;
    }//end for 

}  //end start_atbash 
// start atbash decrypted
let text_atbash_decrypted = document.getElementById('text_atbash_decrypted'),
    atbash_encrypted = document.getElementById('atbash_encrypted'),
    start_atbash_decrypte = document.getElementById('start_atbash_decrypte');

start_atbash_decrypte.onclick = function(ev){
  ev.preventDefault();
  let ciphertext ='';
   for(let i = 0; i< text_atbash_decrypted.value.length;i++){

    	if(text_atbash_decrypted.value.charCodeAt(i)>= 97 && text_atbash_decrypted.value.charCodeAt(i)<= 122 ){
          
          let position = text_atbash_decrypted.value.charCodeAt(i) - 97;
          ciphertext += letter[position];
          
          atbash_encrypted.value = ciphertext;

    	}else if (text_atbash_decrypted.value.charCodeAt(i)>= 65 && text_atbash_decrypted.value.charCodeAt(i)<= 90 ){
    	 let position = text_atbash_decrypted.value.charCodeAt(i) - 65;
          ciphertext += letter2[position];
          atbash_encrypted.value = ciphertext;
    	}
    }//end for 
}
//rot 13 
let start_rot13_encrypte = document.getElementById('start_rot13_encrypte'),
    text_rot13_want_encrypte = document.getElementById('rot13_want_encrypte'),
    text_rot13_encrypted = document.getElementById('rot13_encrypted');

start_rot13_encrypte.onclick = function(ev){
   ev.preventDefault();
   text_rot13_encrypted.value = '';
   let ciphertext ='';

   for(let i = 0; i< text_rot13_want_encrypte.value.length;i++){

    	if(text_rot13_want_encrypte.value.charCodeAt(i)>= 97 && text_rot13_want_encrypte.value.charCodeAt(i)<= 122 ){
          
		    plain = text_rot13_want_encrypte.value.charCodeAt(i) + 13;

	      	if(plain > 122){

	           let plus = plain - 122;

	           plain = 96 + plus;
	           plaintext =String.fromCharCode(plain);
	           text_rot13_encrypted.value += plaintext;
	        }else{
	        	text_rot13_encrypted.value +=String.fromCharCode(plain);
	        }
        
    	}else if (text_rot13_want_encrypte.value.charCodeAt(i)>= 65 && text_rot13_want_encrypte.value.charCodeAt(i)<= 90 ){
	    	
	    	plain = text_rot13_want_encrypte.value.charCodeAt(i) + 13;
	      	if(plain > 90){
	           let plus = plain - 90;

	           plain = 64 + plus;
	           plaintext =String.fromCharCode(plain);
	           text_rot13_encrypted.value += plaintext;
	        }else{
	        	text_rot13_encrypted.value +=String.fromCharCode(plain);
	        }
    	}else{   	
      }
    }//end for 
}// end start encrypte rot13
// start decrypte rot 13
let start_rot13_decrypte = document.getElementById('start_rot13_decrypte'),
    text_rot13_decrypted = document.getElementById('text_rot13_decrypted'),
    en_rot13_encrypted      = document.getElementById('mean_hello');

start_rot13_decrypte.onclick = function(ev){
  ev.preventDefault();
  en_rot13_encrypted.value = '';
    let ciphertext ='';
   for(let i = 0; i< text_rot13_decrypted.value.length;i++){

    	if(text_rot13_decrypted.value.charCodeAt(i)>= 97 && text_rot13_decrypted.value.charCodeAt(i)<= 122 ){
          
            plain = text_rot13_decrypted.value.charCodeAt(i) - 13;

	      	if(plain < 97){

 			   minus = text_rot13_decrypted.value.charCodeAt(i) - 13;
	           plain = 97 - minus;
	           plain = 123 - plain;
	           plaintext =String.fromCharCode(plain);
	           en_rot13_encrypted.value += plaintext;
	        }else{
	        	en_rot13_encrypted.value +=String.fromCharCode(plain);
	        }

    	}else if (text_rot13_decrypted.value.charCodeAt(i)>= 65 && text_rot13_decrypted.value.charCodeAt(i)<= 90 ){
    	   
    	    plain = text_rot13_decrypted.value.charCodeAt(i) - 13;
	      	if(plain < 65){
	           minus = text_rot13_decrypted.value.charCodeAt(i) - 13;
	           plain = 65 - minus;
	           plain = 91 - plain;
	           plaintext =String.fromCharCode(plain);
	           en_rot13_encrypted.value += plaintext;
	        }else{
	        	en_rot13_encrypted.value  +=String.fromCharCode(plain);
	        }
    	}
    }//end for 
}//start rot13 decypte 
// Start mono 
let start_mono_encrypte 	= document.getElementById('start_mono_encrypte'),
    text_mono_want_encrypte = document.getElementById('mono_want_encrypte'),
    mono 	= document.getElementById('mono_aba_encrypted');
let alhaptes = [],
    alhaptes2 = [];
start_mono_encrypte.onclick = function(ev){
   ev.preventDefault();
   ciphertext = '';
   
    for(let i = 0 ; i < 2000; i++){

    	     alhaptes[0]=String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    		let ranumber =String.fromCharCode( Math.floor((Math.random() * 25) + 65));
    		if(alhaptes.includes(ranumber)){
    			continue;
    		}else{
    			alhaptes.push(ranumber);
    			
    		}
    	
    	
    } // for 
    
   
     for(let z = 0 ; z < 2000; z++){

    	     alhaptes[0]=String.fromCharCode(Math.floor((Math.random() * 26) + 97));
    		let ranumber =String.fromCharCode( Math.floor((Math.random() * 26) + 97));
    		if(alhaptes2.includes(ranumber)){
    			continue;
    		}else{
    			alhaptes2.push(ranumber);
    			
    		}
    } // for 

   for(let x = 0; x<text_mono_want_encrypte.value.length;x++){

   		if(text_mono_want_encrypte.value.charCodeAt(x)>= 97 && text_mono_want_encrypte.value.charCodeAt(x)<= 122 ){
          
           let search = alhaptes2.indexOf(text_mono_want_encrypte.value[x]);
           
           ciphertext +=letter[search];

         
    	}else if(text_mono_want_encrypte.value.charCodeAt(x)>= 65 && text_mono_want_encrypte.value.charCodeAt(x)<= 90 ){
          let search = alhaptes.indexOf(text_mono_want_encrypte.value[x]);
           ciphertext +=letter2[search];
    	}
    	mono.value = ciphertext;

   }// end for 
}  // end mono encrypte  
//start decrypte
let start_mono_decrypte = document.getElementById('start_mono_decrypte'),
    text_mono_decrypted = document.getElementById('text_mono_decrypted'),
   _mono_encrypted = document.getElementById('text_mono_encrypted');


start_mono_decrypte.onclick = function(ev){
  ev.preventDefault();
  ciphertext = '';
  
  for(let i = 0;i< text_mono_decrypted.value.length;i++){
  	if(text_mono_decrypted.value.charCodeAt(i)>= 97 && text_mono_decrypted.value.charCodeAt(i)<= 122 ){
          
         let search = alhaptes2.indexOf(text_mono_want_encrypte.value[i]);
           ciphertext +=alhaptes2[search];
          _mono_encrypted.value = ciphertext;

    	}else if (text_mono_decrypted.value.charCodeAt(i)>= 65 && text_mono_decrypted.value.charCodeAt(i)<= 90 ){
    	 
    	let search = alhaptes.indexOf(text_mono_want_encrypte.value[i]);
           ciphertext +=alhaptes[search];
          _mono_encrypted.value = ciphertext
    	}
    	
  }// end for 
	
}    
