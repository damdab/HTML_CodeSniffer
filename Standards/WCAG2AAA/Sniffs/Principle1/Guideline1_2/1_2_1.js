var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = {
    register: function()
    {
        return ['_top'];

    },

    process: function(element, top)
    {
        // Check for elements that could potentially contain audio or video.
        var mediaObjs = top.querySelectorAll('object, embed, applet, bgsound, audio, video');

        for (var i = 0; i < mediaObjs.length; i++) {
            var nodeName = mediaObjs.nodeName.toLowerCase();

            if (nodeName !== 'video') {
                HTMLCS.addMessage(HTMLCS.NOTICE, mediaObjs[i], 'If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.', 'G158');
            }

            if ((nodeName !== 'bgsound') && (nodeName !== 'audio')) {
                HTMLCS.addMessage(HTMLCS.NOTICE, mediaObjs[i], 'If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.', 'G159,G166');
            }
        }

    }
};
