package com.delix.delix;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONArray;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener{

    EditText etIP;
    EditText etPuerto;
    Button btnIngresar;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        etIP = (EditText) findViewById(R.id.idIP);
        etPuerto = (EditText) findViewById(R.id.idPuerto);

        btnIngresar = (Button) findViewById(R.id.btnIngresar);
        btnIngresar.setOnClickListener(this);
    }


    @Override
    public void onClick(View v) {
        Thread th = new Thread(){
            @Override
            public void run(){
                final String resultado = enviarDatosGet(etIP.getText().toString(), etPuerto.getText().toString());

                runOnUiThread(new Runnable(){
                    @Override
                    public void run(){
                        int r = obtDatosJSON(resultado);
                        if (r>0)
                        {
                            Intent i = new Intent(getApplicationContext(), MainActivity.class);
                            startActivity(i);
                        }
                        else {
                            Toast.makeText(getApplicationContext(), "Datos erróneos", Toast.LENGTH_LONG).show();
                        }
                    }
                });
        }
        };
        th.start();
    }

    public String enviarDatosGet (String ip, String puerto)
    {
        URL url = null;
        String linea="";
        int respuesta =0;
        StringBuilder resul = null;

        try {
            url = new URL("http://" + ip + ":" + puerto);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            respuesta = connection.getResponseCode();

            resul = new StringBuilder();

            if (respuesta == HttpURLConnection.HTTP_OK)
            {
                InputStream in = new BufferedInputStream(connection.getInputStream());
                BufferedReader reader = new BufferedReader(new InputStreamReader(in));


                while ((linea=reader.readLine()) != null)
                {
                    resul.append(linea);
                }

            }

        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }

        return resul.toString();
    }

    public int obtDatosJSON(String response){
        int res = 0;

        try{
            JSONArray json = new JSONArray(response);

            if (json.length() > 0){
                res = 1;
            }
        }
        catch(Exception ex){
            ex.printStackTrace();
        }

        return res;
    }
}
