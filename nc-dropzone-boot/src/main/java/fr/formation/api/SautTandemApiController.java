package fr.formation.api;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.dao.ISautTandemDaoJpaRepository;
import fr.formation.model.SautTandem;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/saut-tandem")
public class SautTandemApiController {
    @Autowired
    private ISautTandemDaoJpaRepository daoSautTandem;

    @GetMapping
    @JsonView(Views.SautTandem.class)
    public List<SautTandem> findAll() {
        return this.daoSautTandem.findAll();
    }

    @PostMapping
    public boolean ajouter(@RequestBody SautTandem tandem) {
        try {
            this.daoSautTandem.save(tandem);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable int id) {
        try {
            this.daoSautTandem.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/{id}")
    public boolean edit(@PathVariable int id, @RequestBody SautTandem tandem) {
        try {
            tandem.setId(id);
            this.daoSautTandem.save(tandem);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
