(function execute(inputs, outputs) {
    var capabilityId = '3ae2f151c310ea5097085e0fb0013185';
    var chgID = inputs.chgid;
    if (chgID) {
// createing while loop here.
        while(chgID) {
            var request = {
                executionRequests: [{
                    payload: {
                        "change_request": chgID
                    },
                    capabilityId: capabilityId,
                }]
            };
            var response = sn_one_extend.OneExtendUtil.execute(request);
            gs.info("Successful AI Response\n\n" + JSON.stringify(response));
            if (response.capabilities[capabilityId].status == "success") {
                response = JSON.parse(response.capabilities[capabilityId].response);
                gs.info(JSON.parse(response.model_output));
            }
        }
    }
})(inputs, outputs);