package com.delix.delix;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        String url = "file:///android_asset/index.html";

        WebView view = (WebView) findViewById(R.id.webView);
        view.getSettings().setJavaScriptEnabled(true);
        // view.getSettings().setBuiltInZoomControls(true);
        view.loadUrl(url);
        WebView.setWebContentsDebuggingEnabled(true);
        view.setWebViewClient(new WebViewClient(){

            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest url){
                return false;
            }
        });
    }
}
