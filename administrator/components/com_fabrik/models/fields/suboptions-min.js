var Suboptions=new Class({Implements:[Options],options:{sub_initial_selection:[]},initialize:function(b,a){this.setOptions(a);this.counter=0;this.name=b;this.clickRemoveSubElement=this.removeSubElement.bindWithEvent(this);$("addSuboption").addEvent("click",this.addOption.bindWithEvent(this));this.options.sub_values.each(function(d,c){var e=this.options.sub_initial_selection.indexOf(d)===-1?"":"checked='checked'";this.addSubElement(d,this.options.sub_labels[c],e)}.bind(this));$("adminForm").addEvent("submit",function(c){if(!this.onSave()){c.stop()}}.bind(this))},addOption:function(b){this.addSubElement();var a=new Event(b);a.stop()},removeSubElement:function(b){var a=new Event(b);var c=a.target.id.replace("sub_delete_","");if($("sub_subElementBody").getElements("li").length>1){$("sub_content_"+c).dispose()}a.stop()},addSubElement:function(e,b,c){e=e?e:"";b=b?b:"";var d='<input class="inputbox sub_initial_selection" type="checkbox" value="'+e+"\" name='"+this.name+"[sub_initial_selection][]' id=\"sub_checked_"+this.counter+'" '+c+" />";var a=new Element("li",{id:"sub_content_"+this.counter}).adopt([new Element("table",{width:"100%"}).adopt([new Element("tbody").adopt([new Element("tr").adopt([new Element("td",{rowspan:2,"class":"handle subhandle"}),new Element("td",{width:"30%"}).adopt(new Element("input",{"class":"inputbox sub_values",type:"text",name:this.name+"[sub_values][]",id:"sub_value_"+this.counter,size:20,value:e,events:{change:function(f){fconsole("need to set this chb boxes value to the value field if selected, or set to blank")}}})),new Element("td",{width:"30%"}).adopt(new Element("input",{"class":"inputbox sub_labels",type:"text",name:this.name+"[sub_labels][]",id:"sub_text_"+this.counter,size:20,value:b})),new Element("td",{width:"10%"}).set("html",d),new Element("td",{width:"20%"}).adopt(new Element("a",{"class":"removeButton",href:"#",id:"sub_delete_"+this.counter}).set("text","Delete"))])])])]);if($("sub_subElementBody").getElement("li").innerHTML===""){a.replaces($("sub_subElementBody").getElement("li"))}else{a.inject($("sub_subElementBody"))}$("sub_delete_"+this.counter).addEvent("click",this.clickRemoveSubElement);if(!this.sortable){this.sortable=new Sortables("sub_subElementBody",{handle:".subhandle"})}else{this.sortable.addItems(a)}this.counter++},onSave:function(){var a=[];var b=true;var c=[];$$(".sub_values").each(function(d){if(d.value===""){alert(Joomla.JText._("COM_FABRIK_SUBOPTS_VALUES_ERROR"));b=false}a.push(d.value)});$$(".sub_initial_selection").each(function(d,e){d.value=a[e]});return b}});