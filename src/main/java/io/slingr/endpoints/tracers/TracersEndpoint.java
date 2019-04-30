package io.slingr.endpoints.tracers;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.ApplicationLogger;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>Tracers endpoint
 *
 * <p>Created by egonzalez on 04/16/18.
 */
@SlingrEndpoint(name = "tracers")
public class TracersEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(TracersEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String accessProfileName;

    @EndpointProperty
    private String accessProfilePassword;

    @Override
    public String getApiUri() {
        return "https://api.galaxysearchapi.com";
    }

    @Override
    public void endpointStarted() {
        httpService().setAllowExternalUrl(true);
        httpService().setupDefaultHeader("galaxy-ap-name", accessProfileName);
        httpService().setupDefaultHeader("galaxy-ap-password", accessProfilePassword);
    }

    @EndpointFunction(name = "_search")
    public Json search(FunctionRequest request) {
        final Json data = request.getJsonParams();
        appLogger.info(String.format("Search request received [%s]", data));
        return httpService().defaultPostRequest(Json.map()
                .set("path", getApiUri().concat("/").concat(data.string("searchType")))
                .set("body", data.json("criteria"))
        );
    }
}
