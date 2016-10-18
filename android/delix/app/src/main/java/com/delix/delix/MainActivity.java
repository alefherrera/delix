package com.delix.delix;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String url = "file:///android_asset/index.html";
        this.requestWindowFeature(Window.FEATURE_NO_TITLE);
        //this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        WebView view = new WebView(getApplicationContext());
        view.getSettings().setJavaScriptEnabled(true);
        // view.getSettings().setBuiltInZoomControls(true);
        view.loadUrl(url);
        setContentView(view);
        WebView.setWebContentsDebuggingEnabled(true);
        view.setWebViewClient(new WebViewClient(){

            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest url){
                return false;
            }
        });
    }
}
