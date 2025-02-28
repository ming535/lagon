use std::{fs, path::PathBuf};

use anyhow::{anyhow, Result};

use crate::utils::{bundle_function, debug, get_root, print_progress, success, FunctionConfig};

pub fn build(
    client: Option<PathBuf>,
    public_dir: Option<PathBuf>,
    directory: Option<PathBuf>,
) -> Result<()> {
    let root = get_root(directory);
    let function_config = FunctionConfig::load(&root, client, public_dir)?;
    let (index, assets) = bundle_function(&function_config, &root)?;

    let end_progress = print_progress("Writting index.js...");

    fs::create_dir_all(root.join(".lagon"))?;
    fs::write(root.join(".lagon").join("index.js"), index)?;

    end_progress();

    for (path, content) in assets {
        let message = format!("Writting {path}...");
        let end_progress = print_progress(&message);

        let dir = root.join(".lagon").join("public").join(
            PathBuf::from(&path)
                .parent()
                .ok_or_else(|| anyhow!("Could not find parent of {}", path))?,
        );
        fs::create_dir_all(dir)?;
        fs::write(root.join(".lagon").join("public").join(path), content)?;

        end_progress();
    }

    println!();
    println!(
        "{} {}",
        success("Build successful!"),
        debug("You can find it in .lagon folder.")
    );

    Ok(())
}
