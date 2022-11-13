package com.soloapps.navigation

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NavigationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "NavigationModule"

    @ReactMethod
    fun goHome() {
        val intent = Intent(currentActivity, MainActivity::class.java)
        currentActivity?.startActivity(intent)
    }
}