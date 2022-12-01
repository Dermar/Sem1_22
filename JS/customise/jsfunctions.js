
/**************************************************************************/
/* THIS FILE CONTAINS FUNCTIONS TO BE USED IN YOUR E-Commerce Assignment. */
/* These functions have been created by w3c schools and webmonkey         */
/* DO NOT MODIFY THESE FUNCTION. YOU SIMPLY CALL THEM FROM YOUR HTML FILE */
/**************************************************************************/

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function getCookie(NameOfCookie)
{
	if (document.cookie.length > 0)
	{
		begin = document.cookie.indexOf(NameOfCookie+"=");
		if (begin != -1)
		{
			begin += NameOfCookie.length+1;
			end = document.cookie.indexOf(";", begin);
			if (end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(begin, end));
		}
	}
	return null;
}

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function setCookie(NameOfCookie, value, expiredays)
{
	var ExpireDate = new Date ();
	ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
	document.cookie = NameOfCookie + "=" + escape(value) +
	((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function delCookie (NameOfCookie)
{


	if (getCookie(NameOfCookie))
	{
		document.cookie = NameOfCookie + "=" +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}


// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function popup(url, name, width, height)
{
	properties= "toolbar=no,location=no,directories=no,"+
			  "status=no,menubar=no,scrollbars=no,"+
			  "resizable=no,width="+width+",height="+height;

	window.open(url,name,properties);
}

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function emailvalidation(entered, alertbox)
{
	// E-mail Validation by Henrik Petersen / NetKontoret
	// Explained at www.echoecho.com/jsforms.htm
	// Please do not remove this line and the two lines above.
	with (entered)
	{
		apos=value.indexOf("@"); 
		dotpos=value.lastIndexOf(".");
		lastpos=value.length-1;
		if (apos<1 || dotpos-apos<2 || lastpos-dotpos>3 || lastpos-dotpos<2) 
		{
			if (alertbox) {alert(alertbox);} return false;}
			else
			{
				return true;
			}
		}
} 

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function valuevalidation(entered, min, max, alertbox, datatype)
{
	// Value Validation by Henrik Petersen / NetKontoret
	// Explained at www.echoecho.com/jsforms.htm
	// Please do not remove this line and the two lines above.
	with (entered)
	{
		checkvalue=parseFloat(value);
		if (datatype)
		{
			smalldatatype=datatype.toLowerCase();
			if (smalldatatype.charAt(0)=="i")
			{
				checkvalue=parseInt(value)
			};
		}
		if ((parseFloat(min)==min && checkvalue<min) || (parseFloat(max)==max && checkvalue>max) || value!=checkvalue)
		{
			if (alertbox!="")
			{
				alert(alertbox);
			} 
			return false;
		}
		else
		{
			return true;
		}
	}
} 

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function digitvalidation(entered, min, max, alertbox, datatype)
{
	// Digit Validation by Henrik Petersen / NetKontoret
	// Explained at www.echoecho.com/jsforms.htm
	// Please do not remove this line and the two lines above.
	with (entered)
	{
		checkvalue=parseFloat(value);
		if (datatype)
		{
			smalldatatype=datatype.toLowerCase();
			if (smalldatatype.charAt(0)=="i") 
			{
				checkvalue=parseInt(value); 
				if (value.indexOf(".")!=-1)
				{
					checkvalue=checkvalue+1
				}
			};
		}
		if ((parseFloat(min)==min && value.length<min) || (parseFloat(max)==max && value.length>max) || value!=checkvalue)
		{
			if (alertbox!="") 
			{
				alert(alertbox);
			}
			return false;
		}
		else 
		{
			return true;
		}
	}
} 

// **** WARNING DO NOT MODIFY THIS FUNCTION. YOU SIMPLY CALL THIS FUNCTION  ****
function emptyvalidation(entered, alertbox)
{
	// Emptyfield Validation by Henrik Petersen / NetKontoret
	// Explained at www.echoecho.com/jsforms.htm
	// Please do not remove this line and the two lines above.
	with (entered)
	{
		if (value==null || value=="")
		{
			if (alertbox!="") 
			{
				alert(alertbox);
			}
			return false;
		}
		else
		{
			return true;
		}
	}
} 