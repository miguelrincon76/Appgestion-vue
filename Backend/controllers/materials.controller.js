import Material from "../models/Material";

export const createMaterial = async (req, res) => {
  const { materialId, codigo, descripcion, unidad, valorunit } = req.body;

  try {
    const newMaterial = new Material({
      materialId,
      codigo,
      descripcion,
      unidad,
      valorunit,
    });
    const materialSaved = await newMaterial.save();
    res.status(201).json(materialSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getMaterialById = async (req, res) => {
  const { materialId } = req.params;

  const material = await Material.findById(materialId);
  res.status(200).json(material);
};

export const getMaterials = async (req, res) => {
  const materials = await Material.find();
  return res.json(materials);
};

export const updateMaterialById = async (req, res) => {
  const updatedMaterial = await Material.findByIdAndUpdate(
    req.params.materialId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedMaterial);
};

export const deleteMaterialById = async (req, res) => {
  const { materialId } = req.params;

  await Material.findByIdAndDelete(materialId);

  // code 200 is ok too
  res.status(204).json();
};
