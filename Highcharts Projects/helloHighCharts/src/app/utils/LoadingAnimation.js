define([
	"css!resources/utils/LoadingAnimation.css"
], function() {

	var busyIndicatorId = "_busyIndicator" + Date.now();
    var _createDOMElement = function(type, styleClass) {
        var domElement = document.createElement(type);
        if (styleClass) {
            domElement.className = styleClass;
        }
        return domElement;
    };

    var _createNestedDOMElement = function(type, styleClass) {
    	var intermediateLayer = _createDOMElement(type);
    	var childElement = _createDOMElement(type, styleClass);
    	intermediateLayer.appendChild(childElement);

    	return intermediateLayer;
    };

	var applyLoadingAnimation = function(context) {
		var loadingAnimationBlock = context.find("#" + busyIndicatorId);
        if (loadingAnimationBlock.length === 0) {
            var loadingAnimationElement = _createDOMElement('div', 'sap-bi-va-utils-loadingAnimation');
            loadingAnimationElement.id = busyIndicatorId;
            loadingAnimationBlock = $(loadingAnimationElement);
            context[0].appendChild(loadingAnimationElement);

            var loadingAnimationSection = _createDOMElement('div', 'sap-bi-va-utils-loadingSection');
            loadingAnimationElement.appendChild(loadingAnimationSection);
            loadingAnimationSection.appendChild(_createNestedDOMElement('div', 'sap-bi-va-utils-loadingIcon-circleOne'));
            loadingAnimationSection.appendChild(_createNestedDOMElement('div', 'sap-bi-va-utils-loadingIcon-circleTwo'));
            loadingAnimationSection.appendChild(_createNestedDOMElement('div', 'sap-bi-va-utils-loadingIcon-circleThree'));

            loadingAnimationSection.classList.add('show');
        }
        return loadingAnimationBlock;
	};

	var removeLoadingAnimation = function(context) {
		context.find("#" + busyIndicatorId).remove();
        return null;
	};

	var showLoading = function() {
		var container = _createDOMElement('div', 'loadingContainer');
		container.className = "loadingContainer";
		$("body").append($(container));

		window.setTimeout(function() {
			applyLoadingAnimation($(container));
		}, 0);
	};

	return {
		showLoading: showLoading
	};
});