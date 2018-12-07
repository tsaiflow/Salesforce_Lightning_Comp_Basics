({
	createItem : function(component, item) {
		var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": item });
        createEvent.fire();
    }
})