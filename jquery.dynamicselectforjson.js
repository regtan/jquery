function dynamicpulldownlist(url,postData,targetId){
	$.getJSON(url,postData,function(json){
		var jsonDataObj = eval(json);
		var dataArray =[];
		for(var i=0;i<jsonDataObj.length; i++){
			var tmp = {};
			tmp["value"] = jsonDataObj[i].value;
			tmp["text"] = jsonDataObj[i].text;
			dataArray.push(tmp);
		}
		var select = $(targetId);
		select.clearOptions();
		for(var i = 0;i<dataArray.length;i++){
			select.addOption(dataArray[i]["text"],dataArray[i]["value"],false);
		}
	});
}
