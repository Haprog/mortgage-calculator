package com.example.app;

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;

@PWA(name = "Offline Form", shortName = "Offline Form", offlineResources = { "**" })
public class AppShell implements AppShellConfigurator {

}