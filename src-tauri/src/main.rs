#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::Manager;
use tauri::Size;
use tauri::SystemTray;
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem, SystemTrayEvent};
use std::process::Command;
// use tauri::Size::Physical;
// use std::collections::BTreeSet;
// use merkle_hash::MerkleTree;
// use merkle_hash::MerkleItem;
// use cwd::cwd;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}! You've been greeted from Rust!!!!", name)
}
#[tauri::command]
fn resize(w: u32, h: u32, window: tauri::Window) -> Result<(), String> {
  window.set_size(Size::Physical(tauri::PhysicalSize { width: w, height: h }))
  // window.set_size(tauri:Size::Physical(()))
  // window.set_size(tauri::Size::Physical(Size::Physical(()) ))
  .map_err(|e| e.to_string())?;
  Ok(())
}

#[tauri::command]
fn open_exe(exe_path: String, auth_token: String) -> Result<(), String> {
   Command::new(exe_path)
     .args([auth_token])
     .spawn()
     .map_err(|e| e.to_string())?;
   Ok(())
} 

#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
    let splashscreen_window = window.get_window("splashscreen").unwrap();
    let main_window = window.get_window("main").unwrap();
    tauri::async_runtime::spawn(async move {
        std::thread::sleep(std::time::Duration::from_secs(3));
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
    });
}

fn main() {
    // here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
    let quit = CustomMenuItem::new("exit".to_string(), "Exit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let restart = CustomMenuItem::new("restart".to_string(), "Restart Launcher");
    let tray_menu = SystemTrayMenu::new()
    .add_item(restart)
    .add_item(hide)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
    let system_tray = SystemTray::new().with_menu(tray_menu);
    // get_merkle_tree();
    tauri::Builder::default()
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
              position: _,
              size: _,
              ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                println!("system tray received a left click");
            }
            SystemTrayEvent::RightClick {
              position: _,
              size: _,
              ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                println!("system tray received a right click");
            }
            SystemTrayEvent::DoubleClick {
              position: _,
              size: _,
              ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                println!("system tray received a double click");
            }
            SystemTrayEvent::MenuItemClick { id, .. } => {
              match id.as_str() {
                "quit" => {
                  std::process::exit(0);
                }
                "hide" => {
                  let window = app.get_window("main").unwrap();
                  window.hide().unwrap();
                }
                _ => {}
              }
            }
            _ => {}
          })
        .invoke_handler(tauri::generate_handler![greet, close_splashscreen, open_exe, resize])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}