import { Input } from "../../../components";

export const InputContainers = () => {
  return (
    <div className="flex flex-col gap-y-2 mb-6 mt-4 gap-x-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 ">
        <p className="text-sm">Nombres:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-2">
        <p className="text-sm">Apellidos:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        <p className="text-sm">Email:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-x-2">
        <p className="text-sm ">Direccion:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        <p className="text-sm ">Ciudad:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        <p className="text-sm ">Departamento:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        <p className="text-sm  ">Numero de Celular:</p>
        <Input styles={"col-span-2 border shadow-xs px-2 shadow-sm"} />
      </div>
    </div>
  );
};
