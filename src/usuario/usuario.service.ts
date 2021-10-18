import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"

@Injectable()
export class UsuarioService {
    private usuarios: Array<Usuario> = [{
        id: 1,
        nomeDeUsuario: 'wellington',
        nomeCompleto: 'Wellington Ribeiro',
        email: 'wellington@gmail.com',
        senha: '12345',
        dateDeEntrada: new Date
    }];
    
    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario)
        return usuario
    }
    
    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(
            usuario => usuario.nomeDeUsuario == nomeDeUsuario
        );
    }
}