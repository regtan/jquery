function dynamicpulldownlist(url,postData,targetId){
	var json = getJSON(url,postData);
	var dataArray = parseJSON(json);
	createPullDownList(targetId,dataArray);
}

function getJSON(url,postData){
	var httpObj = $.getJSON(url,postData);
	return httpObj.responseText;
}

function createPullDownList(id,dataArray){

	var select = $(id);
	select.clearOptions();
	for(var i = 0;i<dataArray.length;i++){
		select.addOption(dataArray[i]["text"],dataArray[i]["value"],false);
	}
}

function parseJSON(json){
	var jsonDataObj = eval(json);
	var dataArray =[];

	for(var i=0;i<jsonDataObj.length; i++){
		var tmp = {};
		tmp["value"] = jsonDataObj[i].value;
		tmp["text"] = jsonDataObj[i].text;
		dataArray.push(tmp);
	}
	return dataArray;
}
