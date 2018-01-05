function cc(s)
{
    if(/[^0-9\.]/.test(s)) return "invalid value";
    s=s.replace(/^(\d*)$/,"$1.");
    s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    s=s.replace(".",",");
    var re=/(\d)(\d{3},)/;
    while(re.test(s))
    	s=s.replace(re,"$1,$2");
    s=s.replace(/,(\d\d)$/,".$1");
    return "￥" + s.replace(/^\./,"0.")
}

String.Formate = function(strValue,formatRule){
	var spString;
	var spFormate;
	var spFormateValue;
	var formatString="";
	var condition="";
	var flg="true";
	var count=0;
	
	if(strValue.length==0 || formatRule.split("#").length==0)
	{
		return strValue;
	}
	
	spString=strValue.split(".");
	spFormate=formatRule.split(",");
	
	var arr= new Array(spFormate.length);   
	
	for(j=0;j<spFormate.length;j++)
	{
		spFormateValue=spFormate[j].split("#");
	
		if(j==spFormate.length-1)
		{
			arr[j]=spFormateValue.length-1;
	    }else{
	    	for(k=j;k<spFormate.length;k++)
	        {
	        	spFormateValue=spFormate[k].split("#");
	            if(k==j)
	            {
	            	arr[j]=spFormateValue.length-1;
	            }else{
	            	arr[j]=arr[j]+spFormateValue.length-1;
	            }
	        }
		}
	
		if(j==spFormate.length-1)
		{
	    	condition=condition+"i=="+arr[j]
	    }else{
	        condition=condition+"i=="+arr[j]+" "+"||"+" "
	    }
	}
	
	for (i = strValue.length-1; i >=0 ; i--)
	{
		count=count+1;
	    for(j=0;j<spFormate.length;j++)
	    {
		    if((count==arr[j]) && count !=strValue.length)
			{
	        	formatString=","+spString[i]+formatString;
	            flg="false";
			}
	    }
	
        if(flg=="false")
        {
        	flg="true";
        }else{
            formatString=spString[i]+formatString;
        }
    }
	return formatString;
}